import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.scss']
})
export class ColourPickerComponent implements OnInit {

  @Input() defaultColour = '#0080c0';
  @Output() selectedColourChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onColourChange(colour: string) {
    this.selectedColourChanged.emit(colour);
  }
}
