import { Component, OnInit } from '@angular/core';
import { ITechListProps } from 'src/app/models/interfaces/techs.interface';

@Component({
  selector: 'section [AboutSiteComponent]',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.scss']
})
export class AboutSiteComponent implements OnInit {

  constructor() { }

  techListProps: ITechListProps = {
    techs: [
      {
        dbname: "nexus-angular",
        name: "Angular",
        description: "Angular",
        url: "",
        avatar: "angular.jpg",
        type: "type-technology",
        cover: "angular.cover.jpg",
        photos: [],
      },
      {
        dbname: "nexus-dotnet",
        name: ".Net",
        description: ".Net",
        url: "",
        avatar: "dotnet.jpg",
        type: "type-technology",
        cover: "dotnet.cover.jpg",
        photos: [],
      },
      {
        dbname: "nexus-docker",
        name: "Docker",
        description: "Docker",
        url: "",
        avatar: "docker.jpg",
        type: "type-technology",
        cover: "docker.cover.jpg",
        photos: [],
      },
    ]
  }

  ngOnInit(): void {
  }

}
