import { Component, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/instantcard.interface';
import { INexus } from 'src/app/models/interfaces/nexus.interface';

@Component({
  selector: 'section [ThankYouComponent]',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  imageBaseSettings = {
    width: "6em",
    height: "3em",
  }

  sites: INexus[] = [
    {
      dbname: "nexus-mygithub",
      name: "My Github",
      description: "My Github",
      url: "https://github.com/valorad",
      logo: "github-avatar.jpg",
      type: "type-site",
    },
    {
      dbname: "nexus-3yibao-react-site",
      name: "3yibao React",
      description: "3yibao React",
      url: "https://www.wcnexus.com/3yibao",
      logo: "3yibao.jpg",
      type: "type-site",
    },
    {
      dbname: "nexus-billy-cdk-site",
      name: "BillyCDK.dll",
      description: "BillyCDK.dll",
      url: "https://www.wcnexus.com/bdk",
      logo: "bdk.jpg",
      type: "type-site",
    },
  ];

  siteToInstance = (site: INexus): IInstanceCardProps => ({
    name: site.name,
    image: site.logo,
    styles: {
      image: {
        ...this.imageBaseSettings
      },
      title: {
        display: "block"
      }
    },
  });

  constructor() { }

  ngOnInit(): void {
  }

}
