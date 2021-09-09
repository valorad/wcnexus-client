import { Component, OnInit } from '@angular/core';
import { IDialogSlotProps } from '@xmj-alliance/pit-angular.ui.dialog-slot/dist/src/dialog-slot.interface';
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
      avatar: "project-test.logo.jpg",
      type: "type-project",
      cover: "project-test.cover.jpg",
      photos: [],
      techs: [],
    },
    children: {
      techList: {
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

  
  primaryColor = "#4472c4";

  dialogStyle = {
    overlay: {
      "background": "rgba(255,255,255, 0.5)",
    },
    header: {
      position: "sticky",
      top: "0",
      padding: "1em 0.5em",
      "background-color": "rgba(255, 255, 255, 0.5)"
    },
    container: {
      "background-color": "#fff",
      "padding-bottom": "0.5em",
      border: `2px solid ${this.primaryColor}`,
      "border-radius": "4px",
      "overflow-y": "auto",
      "max-width": "80vw",
      "max-height": "50vh",
    },
    title: {
      "color": this.primaryColor
    }
  }

  projectUUID = Math.random().toString();

  projectDialogProps: IDialogSlotProps = {
    id: `dialog-project-description-${this.ProjectDetailProps?.project?.dbname || this.projectUUID}`,
    title: 'Project Description',
    styles: {
      ...this.dialogStyle
    }
  }

  techListUUID =  Math.random().toString();

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

  techListDialogProps: IDialogSlotProps = {
    id: `dialog-project-tech-list-${this.ProjectDetailProps?.project?.dbname || this.techListUUID}`,
    title: 'Project Tech List',
    styles: {
      ...this.dialogStyle
    }
  }

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
