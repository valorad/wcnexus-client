import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import textGopibutong from "../../../../statics/data/Misc/text-gopibutong";
import { TextDisplayComponent } from './text-display.component';


describe("Text Display test", () => {

  let fixture: ComponentFixture<TextDisplayComponent>;
  let component: TextDisplayComponent;
  let element: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        TextDisplayComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TextDisplayComponent);
    component = fixture.componentInstance; // The component instantiation 
    element = fixture.nativeElement; // The HTML reference

  }));

  test('Passing data', () => {

    // test long texts
    const longText = textGopibutong.text;
    const article = element.querySelector(".mainText") as HTMLDivElement;

    component.TextDisplayProps = {
      content: longText,
      throttle: 60,
    };

    fixture.detectChanges();

    const expectedResult = `${longText.substring(0, component.TextDisplayProps.throttle)}...`

    expect(article.textContent).toContain(expectedResult);

    // test short texts
    const shortText = "Short little text";
    component.TextDisplayProps = {
      ...component.TextDisplayProps,
      content: shortText,
    };
    fixture.detectChanges();
    
    const shortTextExpectedResult = shortText;

    expect(article.textContent).toContain(shortTextExpectedResult);

  });

});