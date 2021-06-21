import { Component, Input, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/instantcard.interface';
import { INexus } from 'src/app/models/interfaces/nexus.interface';
import { IThankYouProps } from 'src/app/models/interfaces/thank-you.interface';

@Component({
  selector: 'section [ThankYouComponent]',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  @Input() ThankYouProps! : Partial<IThankYouProps>

  imageBaseSettings = {
    width: "6em",
    height: "3em",
  }

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
