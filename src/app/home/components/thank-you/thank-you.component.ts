import { Component, OnInit } from '@angular/core';

interface ISite {
  title: string,
  link: string,
  cover: string,
}

@Component({
  selector: 'section [ThankYouComponent]',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  imageBaseSettings = {
    styles: {
      width: "6em",
      height: "3em",
    }
  }

  sites: ISite[] = [
    {
      title: "My Github",
      link: "https://github.com/valorad",
      cover: "github-avatar.jpg",
    },
    {
      title: "3yibao",
      link: "https://www.wcnexus.com/3yibao",
      cover: "3yibao.jpg",
    },
    {
      title: "BillyCDK.dll",
      link: "https://www.wcnexus.com/bdk",
      cover: "bdk.jpg",
    },
  ];

  siteToInstance = (site: ISite) => {
    return {
      name: site.title,
      image: site.cover,
      children: {
        image: {
          ...this.imageBaseSettings
        },
        title: {
          styles: {
            display: "block"
          }
        }
      },
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
