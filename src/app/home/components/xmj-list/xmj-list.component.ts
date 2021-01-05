import { Component, OnInit } from '@angular/core';
import { IInstanceCardProps } from '../instance-card/instance-card.component';

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

  xmjToInstance = (xmj: IXiaoMaJiaInfo) => {
    return {
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
    }
  };

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
