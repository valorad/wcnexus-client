import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import textGopibutong from "src/statics/data/Misc/text-gopibutong";
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
    const props = {
      content: textGopibutong.text,
      throttle: 60,
    };

    const article = element.querySelector(".mainText") as HTMLDivElement;

    component.TextDisplayProps = props;
    fixture.detectChanges();

    const expectedResult = `${props.content.substring(0, props.throttle)}...`

    expect(article.textContent).toContain(expectedResult);

    props.content = "Short little text."
    fixture.detectChanges();
    
    const shortTextExpectedResult = props.content;

    expect(article.textContent).toContain(shortTextExpectedResult);

  });

});