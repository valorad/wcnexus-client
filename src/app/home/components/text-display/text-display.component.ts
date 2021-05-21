import { Component, Input, OnInit } from '@angular/core';
import { ITextDisplayProps } from 'src/app/models/interfaces/text-display.interface';

@Component({
  selector: 'home-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {

  @Input() TextDisplayProps! : Partial<ITextDisplayProps>

  constructor() { }

  ngOnInit(): void {
  }

}
