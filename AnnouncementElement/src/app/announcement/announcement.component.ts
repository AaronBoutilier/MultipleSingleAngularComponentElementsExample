import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  @Input() text = 'This is the default announcement!';
  @Input() textColour = '#000000';
  @Input() backgroundColour = '#ffffff';

  constructor() { }

  ngOnInit(): void {
  }

}
