import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AnnouncementComponent } from './announcement/announcement.component';


@NgModule({
  declarations: [
    AnnouncementComponent,
  ],
  entryComponents: [
    AnnouncementComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
})
export class AppModule {

  constructor(injector: Injector) {
    const announcementComponent = createCustomElement(AnnouncementComponent, {injector});
    customElements.define('app-announcement', announcementComponent);
  }

  ngDoBootstrap() { }
}
