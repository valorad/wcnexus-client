import { CommonModule } from "@angular/common";
import { ComponentFixture, waitForAsync, TestBed } from "@angular/core/testing";
import { IProjectListProps } from "src/app/models/interfaces/project.interface";
import { InstanceCardComponent } from "../instance-card/instance-card.component";
import { ProjectListComponent } from "./project-list.component";

describe("projectList test", () => {

  let fixture: ComponentFixture<ProjectListComponent>;
  let component: ProjectListComponent;
  let element: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        ProjectListComponent,
        InstanceCardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance; // The component instantiation 
    element = fixture.nativeElement; // The HTML reference

  }));

  test('Passing data', () => {

    const props: IProjectListProps = {
      projects: [
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
      ]
    };

    const ul = element.querySelector(".projectListHolder") as HTMLUListElement;

    component.ProjectListProps = props;
    fixture.detectChanges(); 

    expect(ul.childElementCount).toEqual(props.projects.length);

  });

});