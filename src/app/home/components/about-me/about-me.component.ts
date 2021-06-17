import { Component, Input, OnInit } from '@angular/core';
import { IAboutMeProps } from 'src/app/models/interfaces/about-me.interface';

@Component({
  selector: 'section [AboutMeComponent]',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @Input() AboutMeProps! : Partial<IAboutMeProps>

  constructor() { }

  ngOnInit(): void {
  }

}
