import Reveal from "reveal.js";

import { Component, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/instantcard.interface';
import { IChapter } from '../../../models/interfaces/catalog.interface';

@Component({
  selector: 'section [CatalogComponent]',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  imageBaseSettings = {
    width: "6em",
    height: "3em",
    display: "block",
  }

  chapters: IChapter[] = [
    {
      name: "welcome",
      title: "Welcome",
      cover: "",
      description: "",
      index: 0,
    },
    {
      name: "about-me",
      title: "About me",
      cover: "",
      description: "",
      index: 3,
    },
    {
      name: "about-wcn",
      title: "About wcn",
      cover: "",
      description: "",
      index: 4,
    },
    {
      name: "project-case",
      title: "Project case",
      cover: "",
      description: "",
      index: 5,
    },
    {
      name: "thank-you",
      title: "Thank you",
      cover: "",
      description: "",
      index: 6,
    }
  ];

  chapterToInstance = (chapter: IChapter): IInstanceCardProps => ({
    name: chapter.title,
    image: chapter.cover,
    styles: {
      image: {
        ...this.imageBaseSettings,
      },
      title: {
        display: "block"
      }
    }
  });

  navigateTo = (targetSlideIndex: number) => {  
    Reveal.slide(targetSlideIndex, 0);
  };

  constructor() { }

  ngOnInit(): void {

    // Cannot get slides index. Reveal instance is different. cannot do it unless using ngrx store.

  }

}
