import { Component, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/instantcard.interface';
import { IProject } from 'src/app/models/interfaces/project.interface';

@Component({
  selector: 'home-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: IProject[] = [
    {
      dbname: "smart-eatout",
      name: "Smart Eat-Out",
      description: "Smart Eat-Out",
      techs: [],
      url: "",
      logo: "",
      type: "type-project",
      images: [
        {
          dbname: "",
          url: "",
        }
      ]
    },
    {
      dbname: "billy-CDK",
      name: "billy-CDK",
      description: "billy-CDK",
      techs: [],
      url: "",
      logo: "",
      type: "type-project",
      images: [
        {
          dbname: "",
          url: "",
        }
      ]
    },
    {
      dbname: "voila-CDN",
      name: "voila-CDN",
      description: "voila-CDN",
      techs: [],
      url: "",
      logo: "",
      type: "type-project",
      images: [
        {
          dbname: "",
          url: "",
        }
      ]
    },
    {
      dbname: "Container-based AutoML",
      name: "Container-based AutoML",
      description: "Container-based AutoML",
      techs: [],
      url: "",
      logo: "",
      type: "type-project",
      images: [
        {
          dbname: "",
          url: "",
        }
      ]
    },
    {
      dbname: "3yibao-react",
      name: "3yibao-react",
      description: "3yibao-react",
      techs: [],
      url: "",
      logo: "",
      type: "type-project",
      images: [
        {
          dbname: "",
          url: "",
        }
      ]
    },
  ];

  imageBaseSettings = {
    styles: {
      width: "6em",
      height: "3em",
    }
  }

  projectToInstance = (project: IProject): IInstanceCardProps => ({
    name: project.name,
    image: project.logo,
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
  });

  constructor() { }

  ngOnInit(): void {
  }

}
