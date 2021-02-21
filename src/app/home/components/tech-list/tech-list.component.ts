import { Component, OnInit } from '@angular/core';
import { INexus } from 'src/app/models/interfaces/nexus.interface';

@Component({
  selector: 'home-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {

  techs: INexus[] = [
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
  ];

  coverStyles = {
    width: "4em",
    height: "4em",
  };

  techToInstance = (tech: INexus) => {
    return {
      name: tech.name,
      image: tech.logo,
      children: {
        image: {
          styles: this.coverStyles
        },
        title: {
          styles: {
            display: "none"
          }
        }
      },
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
