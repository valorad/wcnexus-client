import { Component, OnInit } from '@angular/core';
import MicroModal from 'micromodal';
import { IProjectDetailProps } from 'src/app/models/interfaces/project.interface';

@Component({
  selector: 'home-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  ProjectDetailProps: Partial<IProjectDetailProps> = {
    project: {
      dbname: "project-test",
      name: "Test Project of the extreme Serendipity",
      description: "Test Project of the extreme Serendipity \n which is the wonder of **ultimate bizzarity** \n ## descr \n very very nice blah",
      url: "https://example.com",
      logo: "",
      type: "type-project",
      techs: [],
      images: []
    },
    children: {
      techList: {
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
        ],
        limit: 100,
        cardStyle: {
          image: {
            width: "3em",
            height: "3em",
          }
        }
      }
    }
  }

  techListShort = {
    ...this.ProjectDetailProps?.children?.techList,
    limit: 3,
    cardStyle: {
      image: {
        width: "1em",
        height: "1em",
      }
    }
  }

  projectUUID = Math.random().toString();
  techListUUID =  Math.random().toString();

  onDescriptionClick = (e: MouseEvent) => {
    MicroModal.show(`dialog-project-description-${this.ProjectDetailProps.project?.dbname || this.projectUUID}`);
  };

  onTechListClick = (e: MouseEvent) => {
    MicroModal.show(`dialog-project-tech-list-${this.ProjectDetailProps.project?.dbname || this.techListUUID}`);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
