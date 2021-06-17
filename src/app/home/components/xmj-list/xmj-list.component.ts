import { Component, Input, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/instantcard.interface';
import { IXiaoMaJia, IXMJListProps } from 'src/app/models/interfaces/xmj.interface';

@Component({
  selector: 'home-xmj-list',
  templateUrl: './xmj-list.component.html',
  styleUrls: ['./xmj-list.component.scss']
})
export class XMJListComponent implements OnInit {

  @Input() XMJListProps! : Partial<IXMJListProps>

  imageBaseSettings = {
    width: "4em",
    height: "4em",
  }

  xmjToInstance = (xmj: IXiaoMaJia): IInstanceCardProps => ({

    ...xmj,
    styles: {
      image: {
        ...this.imageBaseSettings
      },
      title: {
        display: "none"
      }
    },

  });

  constructor() { }

  ngOnInit(): void {

  }

}
