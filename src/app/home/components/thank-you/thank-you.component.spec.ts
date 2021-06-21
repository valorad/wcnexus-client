import { CommonModule } from "@angular/common";
import { ComponentFixture, waitForAsync, TestBed } from "@angular/core/testing";
import { IThankYouProps } from "src/app/models/interfaces/thank-you.interface";
import { InstanceCardComponent } from "../instance-card/instance-card.component";
import { ThankYouComponent } from "./thank-you.component";

describe("thankYou test", () => {

  let fixture: ComponentFixture<ThankYouComponent>;
  let component: ThankYouComponent;
  let element: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        ThankYouComponent,
        InstanceCardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance; // The component instantiation 
    element = fixture.nativeElement; // The HTML reference

  }));

  test('Passing data', () => {

    const props: IThankYouProps = {
      nextSites: [
        {
          dbname: "nexus-github-site",
          name: "My Github",
          description: "My Github",
          url: "https://github.com/valorad",
          logo: "github-avatar.jpg",
          type: "type-site",
        },
        {
          dbname: "nexus-3yibao-react-site",
          name: "3yibao React",
          description: "3yibao React",
          url: "https://www.wcnexus.com/3yibao",
          logo: "3yibao.jpg",
          type: "type-site",
        },
        {
          dbname: "nexus-billy-cdk-site",
          name: "BillyCDK.dll",
          description: "BillyCDK.dll",
          url: "https://www.wcnexus.com/bdk",
          logo: "bdk.jpg",
          type: "type-site",
        },
      ],
      socialMedia: [
        {
          dbname: "nexus-weibo",
          name: "My Weibo",
          description: "My Weibo",
          url: "https://weibo.com/wcxaaa",
          logo: "github-avatar.jpg",
          type: "type-social",
        },
        {
          dbname: "nexus-zhihu",
          name: "My Zhihu",
          description: "My Zhihu",
          url: "https://www.zhihu.com/people/valorad",
          logo: "github-avatar.jpg",
          type: "type-social",
        },
        {
          dbname: "nexus-twitter",
          name: "My Twitter",
          description: "My Twitter",
          url: "https://twitter.com/wcxaaa",
          logo: "github-avatar.jpg",
          type: "type-social",
        },
        {
          dbname: "nexus-github",
          name: "My Github",
          description: "My Github",
          url: "https://github.com/valorad",
          logo: "github-avatar.jpg",
          type: "type-social",
        },
      ],
    }

    const ul = element.querySelector(".nextSites") as HTMLUListElement;
    
    component.ThankYouProps = props;
    fixture.detectChanges(); 

    const spans = element.querySelectorAll(".social") as NodeListOf<HTMLSpanElement>;

    expect(ul.childElementCount).toEqual(props.nextSites.length);
    expect(spans.length).toEqual(props.socialMedia.length);


  });

});