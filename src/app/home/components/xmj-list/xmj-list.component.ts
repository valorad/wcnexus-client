import { Component, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/instantcard.interface';

interface IXiaoMaJiaInfo {
  name: string,
  image: string,
}

@Component({
  selector: 'home-xmj-list',
  templateUrl: './xmj-list.component.html',
  styleUrls: ['./xmj-list.component.scss']
})
export class XMJListComponent implements OnInit {

  xiaoMaJias: IXiaoMaJiaInfo[] = [];

  imageBaseSettings = {
    styles: {
      width: "4em",
      height: "4em",
    }
  }

  xmjToInstance = (xmj: IXiaoMaJiaInfo): IInstanceCardProps => ({

    ...xmj,
    children: {
      image: {
        ...this.imageBaseSettings
      },
      title: {
        styles: {
          display: "none"
        }
      }
    },

  });

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      this.xiaoMaJias.push({
        name: `xmj-${i}`,
        image: `avt-${i}.jpg`,
      });
    }
  }

}
