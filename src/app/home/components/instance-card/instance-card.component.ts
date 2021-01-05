import { Component, Input, OnInit } from '@angular/core';
import { IChildElementStore, IElementStyleStore } from 'src/app/models/props.interface';

export interface IInstanceCardProps {
  image: string,
  name: string,
  children: Partial<IInstanceCardChildren>,
}

export interface IInstanceCardChildren extends IChildElementStore {
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

  // private _InstanceCardProps!: IInstanceCardProps;
  // get InstanceCardProps() : Partial<IInstanceCardProps> {
  //   return this._InstanceCardProps as IInstanceCardProps;
  // }
  // @Input() set InstanceCardProps(v: Partial<IInstanceCardProps>) {
  //   console.log("Filll!!!!");
    
  //   // Fill with default data if not provided
  //   this._InstanceCardProps = {
  //     name: "def",
  //     image: "",
  //     children: {
  //       image: {
  //         styles: {}
  //       },
  //       title: {
  //         styles: {}
  //       },
  //       ...v.children,
  //     },
  //     ...v,
  //   } as IInstanceCardProps;

  //   console.log(this._InstanceCardProps.name);
  // }

  @Input() InstanceCardProps! : Partial<IInstanceCardProps>

  constructor() { }

  ngOnInit(): void {

  }

}
