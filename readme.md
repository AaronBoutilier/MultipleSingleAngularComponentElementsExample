
# Multiple Angular Elements
Angular elements don't play well with other angular elements out of the box. In order to make them play nicely together, follow this example project along with the following instructions.

## In This Project
In this project there are three angular projects, `AnnouncementElement`, `ColourPickerElement`, and `ElementsContainer`. These are to demonstrate the following instructions. 
The announcement project's build output is it's `agi-announcement.js` file after running `npm run build` in that project. It's only purpose is to take three inputs, the text to display, a text colour, and a background colour and display that message with the appropriate colours. 
The colour picker project's build output is it's `agi-colour-picker.js` file after running the `npm run build` in that project. It's only purpose is to take a default colour to be it's default selected colour, and has a `selectedColourChanged` event to output the newly selected colour.
The elements container project has had it's `angular.json` file modified to include the announcement and colour picker dist files as they would be included in any other project that would use them. It's purpose is to use the elements built from the other projects together as a proof of concept. You will find that the app component does make use of two elements. It has two colour picker tags to be used for the text and background colours for the announcement tag. It also has its own input tag to modify the announcement text. 

## Turning a single component angular app into an element
1. Start by generating a new angular app with the familiar `ng n <APP_NAME>`. When prompted about routing you can opt to not add it. Next you will be prompted to select a stylesheet format, you can decide this as you would like.
2. Next change directory to be inside your newly created angular app. Once inside you can run the command `ng add @angular/elements` this will install necessary npm packages and slightly modify some other things for your project.
3. We won't be needing the app component, go ahead and delete all the `app.component.*` files. With those files out of the way, use the `ng g c <COMPONENT_NAME>` to create your component that will be the angular element.
4. We now must fix our `app.module.ts` file since we deleted the app component. 
	- Remove all references to the deleted app component. 
	- Add entryComponents with your new component
	- Add the following code to the AppModule class

<pre><code>constructor(injector: Injector) {
  const component = createCustomElement(YOUR_COMPONENT, {injector});
  customElements.define('app-PROJECT_NAME', component);
}

ngDoBootstrap() { }</code></pre>
  5. Next to make this element play nicely with others, we will need to do the following
	  - Run the command `npm i -D @angular-builders/custom-webpack` 
	  - Update the `angular.json` file's architect build builder to be `@angular-builders/custom-webpack:browser`
	  - In the file, add the following to architect build options
<pre><code>"customWebpackConfig": {
  "path": "./extra-webpack.config.js",
  "mergeStrategies": {
    "externals": "replace"
 }
},</code></pre>
- Create the file `extra-webpack.config.js` on the root of the project with the following code
<pre><code>module.exports = {
  output: {
    jsonpFunction:  "webpackJsonpPROJECT_NAME",
    library:  "PROJECT_NAME"
  }
};</code></pre>
6. Update the projects `browserlist` file with the following 
<pre><code>defaults
not > 0.5%
not last 2 versions
not Firefox ESR
not dead
not IE 9-11 # For IE 9-11 support, remove 'not'.</code></pre>
7. Create the file `concat-build.sh` with the following code in it
<pre><code>cat \
  dist/PROJECT_NAME/main.js \
  dist/PROJECT_NAME/runtime.js \
  dist/PROJECT_NAME/polyfills.js \
  > dist/app-PROJECT_NAME.js
</code></pre>
8. Finally, update the `package.json` file's build script to the following `ng build --prod --output-hashing=none && sh concat-build.sh`

Now to use this element, run the `npm run build` command and look in the dist folder for your element js file. Include this file in any html page and use it as if it were an HTML tag.
