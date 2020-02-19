import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  announcementText = 'Default Announcement Text';

  textColour = '#7CFC00';
  backgroundColour = '#008B8B';

  title = 'ElementsContainer';

  onSelectedTextColourChanged(event) {
    this.textColour = event.detail;
  }

  onSelectedBackgroundColourChanged(event) {
    this.backgroundColour = event.detail;
  }
}
