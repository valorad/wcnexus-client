import { CommonModule } from "@angular/common";
import { ComponentFixture, waitForAsync, TestBed } from "@angular/core/testing";
import { IXMJListProps } from "src/app/models/interfaces/xmj.interface";
import { InstanceCardComponent } from "../instance-card/instance-card.component";
import { XMJListComponent } from "./xmj-list.component";

describe("xmjList test", () => {

  let fixture: ComponentFixture<XMJListComponent>;
  let component: XMJListComponent;
  let element: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        XMJListComponent,
        InstanceCardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(XMJListComponent);
    component = fixture.componentInstance; // The component instantiation 
    element = fixture.nativeElement; // The HTML reference

  }));

  test('Passing data', () => {

    const props: IXMJListProps = {
      xiaoMaJias: []
    };

    const xmjCount = 6;

    // populate xmj list data
    for (let i = 0; i < xmjCount; i++) {
      props.xiaoMaJias.push({
        name: `xmj-${i}`,
        image: `avt-${i}.jpg`,
      });
    }

    const ul = element.querySelector(".xmjHolder") as HTMLUListElement;

    component.XMJListProps = props;
    fixture.detectChanges(); 

    expect(ul.childElementCount).toEqual(xmjCount);

  });

});