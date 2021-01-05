import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section [CatalogComponent]',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  imageBaseSettings = {
    styles: {
      width: "6em",
      height: "3em",
      display: "block",
    }
  }

  chapters = [
    {
      name: "Welcome",
      children: {
        image: {
          ...this.imageBaseSettings
        }
      },
    },
    {
      name: "About me",
      children: {
        image: {
          ...this.imageBaseSettings
        }
      },
    },
    {
      name: "About wcn",
      children: {
        image: {
          ...this.imageBaseSettings
        }
      },
    },
    {
      name: "Project case",
      children: {
        image: {
          ...this.imageBaseSettings
        }
      },
    },
    {
      name: "Thank you",
      children: {
        image: {
          ...this.imageBaseSettings
        }
      },
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
