import { Component, Input, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/props.interface';

@Component({
  selector: 'home-instance-card',
  templateUrl: './instance-card.component.html',
  styleUrls: ['./instance-card.component.scss']
})
export class InstanceCardComponent implements OnInit {

  @Input() InstanceCardProps! : Partial<IInstanceCardProps>

  constructor() { }

  ngOnInit(): void {

  }

}
