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
        logo: "angular.jpg",
        type: "type-technology",
      },
      {
        dbname: "nexus-dotnet",
        name: ".Net",
        description: ".Net",
        url: "",
        logo: "dotnet.jpg",
        type: "type-technology",
      },
      {
        dbname: "nexus-docker",
        name: "Docker",
        description: "Docker",
        url: "",
        logo: "docker.jpg",
        type: "type-technology",
      },
    ]
  }

  ngOnInit(): void {
  }

}
