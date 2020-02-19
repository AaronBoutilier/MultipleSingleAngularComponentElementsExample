import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ColourPickerComponent } from './colour-picker/colour-picker.component';

@NgModule({
  entryComponents: [
    ColourPickerComponent,
  ],
  imports: [
    BrowserModule,
  ],
})
export class AppModule {

  constructor(injector: Injector) {
    const colourPickerComponent = createCustomElement(ColourPickerComponent, {injector});
    customElements.define('app-colour-picker', colourPickerComponent);
  }

  ngDoBootstrap() { }
}
