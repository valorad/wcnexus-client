import { Component, OnInit } from '@angular/core';

interface IChapter {
  name: string,
  cover: string,
  description: string,
}

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

  chapters: IChapter[] = [
    {
      name: "Welcome",
      cover: "",
      description: "",
    },
    {
      name: "About me",
      cover: "",
      description: "",
    },
    {
      name: "About wcn",
      cover: "",
      description: "",
    },
    {
      name: "Project case",
      cover: "",
      description: "",
    },
    {
      name: "Thank you",
      cover: "",
      description: "",
    }
  ];

  chapterToInstance = (chapter: IChapter) => {
    return {
      name: chapter.name,
      image: chapter.cover,
      children: {
        image: {
          ...this.imageBaseSettings,
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
