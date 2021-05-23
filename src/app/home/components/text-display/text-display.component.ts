import { Component, Input, OnInit } from '@angular/core';
import { ITextDisplayProps } from 'src/app/models/interfaces/text-display.interface';

@Component({
  selector: 'home-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {

  displayContent = "";

  private _textDisplayProps: Partial<ITextDisplayProps> = {};
  public get TextDisplayProps(): Partial<ITextDisplayProps> {
    return this._textDisplayProps;
  }

  @Input()
  public set TextDisplayProps(v: Partial<ITextDisplayProps>) {
    
    this._textDisplayProps = v;

    if (!v.content) {
      this.displayContent = "(No content to show...)";
      return;
    }

    if (v.throttle && v.content.length > v.throttle) {
      this.displayContent = `${v.content.substring(0, v.throttle)}...`;
    } else {
      this.displayContent = v.content;
    }

  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
