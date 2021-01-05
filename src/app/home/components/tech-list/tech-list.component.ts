import { Component, OnInit } from '@angular/core';

interface ITechnology {
  name: string,
  description: string,
  cover: string,
}

@Component({
  selector: 'home-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {

  techs: ITechnology[] = [
    {
      name: "Angular",
      description: "Angular",
      cover: "angular.jpg",
    },
    {
      name: ".Net",
      description: ".Net",
      cover: "dotnet.jpg",
    },
    {
      name: "Docker",
      description: "Docker",
      cover: "docker.jpg",
    }
  ];

  coverStyles = {
    width: "4em",
    height: "4em",
  };

  techToInstance = (tech: ITechnology) => {
    return {
      name: tech.name,
      image: tech.cover,
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
