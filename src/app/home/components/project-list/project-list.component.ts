import { Component, Input, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/instantcard.interface';
import { IProject, IProjectListProps } from 'src/app/models/interfaces/project.interface';

@Component({
  selector: 'home-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() ProjectListProps! : Partial<IProjectListProps>

  imageBaseSettings = {
    width: "6em",
    height: "3em",
  }

  projectToInstance = (project: IProject): IInstanceCardProps => ({
    name: project.name,
    image: project.avatar,
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
