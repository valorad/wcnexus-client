import { Component, Input, OnInit } from '@angular/core';
import { IChildElementStore, IElementStyleStore } from 'src/app/models/props.interface';

interface IInstanceCardProps {
  image: string,
  name: string,
  children: Partial<IInstanceCardChildren>,
}

interface IInstanceCardChildren extends IChildElementStore {
  image: {
    styles: IElementStyleStore
  },
  title: {
    styles: IElementStyleStore
  }
}

@Component({
  selector: 'home-instance-card',
  templateUrl: './instance-card.component.html',
  styleUrls: ['./instance-card.component.scss']
})
export class InstanceCardComponent implements OnInit {

  
  private _InstanceCardProps!: IInstanceCardProps;
  get InstanceCardProps() : Partial<IInstanceCardProps> {
    return this._InstanceCardProps as IInstanceCardProps;
  }
  @Input() set InstanceCardProps(v: Partial<IInstanceCardProps>) {
    this._InstanceCardProps = {
      children: {
        image: {
          styles: {}
        },
        title: {
          styles: {}
        }
      },
      ...v,
    } as IInstanceCardProps;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
