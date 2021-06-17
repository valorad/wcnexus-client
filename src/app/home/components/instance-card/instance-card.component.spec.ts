import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InstanceCardComponent } from './instance-card.component';


describe("Instance card test", () => {

  let fixture: ComponentFixture<InstanceCardComponent>;
  let component: InstanceCardComponent;
  let element: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        InstanceCardComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InstanceCardComponent);
    component = fixture.componentInstance; // The component instantiation 
    element = fixture.nativeElement; // The HTML reference

  }));

  test('Passing data', () => {
    const props = {
      image: "test.jpg",
      name: "Awesome card",
      styles: {
        image: {
          height: "3em",
          width: "3em",
        }
      }
    };

    const picture = element.querySelector(".instanceCard picture") as HTMLPictureElement;
    const nameBox = element.querySelector("div.nameBox") as HTMLDivElement;

    component.InstanceCardProps = props;
    fixture.detectChanges(); 

    expect(picture.style.height).toBe("3em");
    expect(picture.style.width).toBe("3em");
    expect(nameBox.textContent).toContain(props.name);

  });

});