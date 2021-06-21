import { Component, Input, OnInit } from '@angular/core';
import { IWelcomeProps } from 'src/app/models/interfaces/welcome.interface';

@Component({
  selector: 'section [WelcomeComponent]',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() WelcomeProps! : Partial<IWelcomeProps>

  constructor() { }

  ngOnInit(): void {

  }

}
