import { CommonModule } from "@angular/common";
import { ComponentFixture, waitForAsync, TestBed } from "@angular/core/testing";
import { ITechListProps } from "src/app/models/interfaces/techs.interface";
import { InstanceCardComponent } from "../instance-card/instance-card.component";
import { TechListComponent } from "./tech-list.component";

describe("techList test", () => {

  let fixture: ComponentFixture<TechListComponent>;
  let component: TechListComponent;
  let element: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        TechListComponent,
        InstanceCardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TechListComponent);
    component = fixture.componentInstance; // The component instantiation 
    element = fixture.nativeElement; // The HTML reference

  }));

  test('Passing data', () => {

    const props: ITechListProps = {
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
    };

    const ul = element.querySelector(".techListHolder") as HTMLUListElement;

    component.TechListProps = props;
    fixture.detectChanges(); 

    expect(ul.childElementCount).toEqual(props.techs.length);

  });

});