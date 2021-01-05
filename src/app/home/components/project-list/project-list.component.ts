import { Component, OnInit } from '@angular/core';

interface IProject {
  name: string,
  description: string,
  cover: string,
}

@Component({
  selector: 'home-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: IProject[] = [
    {
      name: "smart-eatout",
      description: "Smart Eat-Out",
      cover: "",
    },
    {
      name: "billy-CDK",
      description: "billy-CDK",
      cover: "",
    },
    {
      name: "voila-CDN",
      description: "voila-CDN",
      cover: "",
    },
    {
      name: "Container-based AutoML",
      description: "Container-based AutoML",
      cover: "",
    },
    {
      name: "3yibao React",
      description: "3yibao React",
      cover: "",
    }
  ];

  imageBaseSettings = {
    styles: {
      width: "6em",
      height: "3em",
    }
  }

  projectToInstance = (project: IProject) => {
    return {
      name: project.name,
      image: project.cover,
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
