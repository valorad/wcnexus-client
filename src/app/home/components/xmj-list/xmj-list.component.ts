import { Component, OnInit } from '@angular/core';

interface IXiaoMaJiaInfo {
  name: string,
  avatar: string,
}

@Component({
  selector: 'home-xmj-list',
  templateUrl: './xmj-list.component.html',
  styleUrls: ['./xmj-list.component.scss']
})
export class XMJListComponent implements OnInit {

  xiaoMaJias: IXiaoMaJiaInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      this.xiaoMaJias.push({
        name: `xmj-${i}`,
        avatar: `avatar-xmj-${i}.jpg`,
      });
    }
  }

}
