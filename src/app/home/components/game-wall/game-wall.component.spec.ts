import { CommonModule } from "@angular/common";
import { ComponentFixture, waitForAsync, TestBed } from "@angular/core/testing";
import { IGameWallProps } from "src/app/models/interfaces/game-wall.interface";
import { INexus } from "src/app/models/interfaces/nexus.interface";
import { InstanceCardComponent } from "../instance-card/instance-card.component";
import { GameWallComponent } from "./game-wall.component";

describe("gameWall test", () => {

  let fixture: ComponentFixture<GameWallComponent>;
  let component: GameWallComponent;
  let element: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        GameWallComponent,
        InstanceCardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameWallComponent);
    component = fixture.componentInstance; // The component instantiation 
    element = fixture.nativeElement; // The HTML reference

  }));

  test('Passing data', () => {

    const props: IGameWallProps = {
      games: []
    };

    const gameCount = 30;

    // populate game wall data
    for (let i = 0; i < gameCount; i++) {
      props.games.push(
        {
          name: `game-${i}`,
          logo: `ag${i}`,
          type: "type-game",
        } as INexus
      );
    }

    const div = element.querySelector(".gameAvatars") as HTMLDivElement;

    component.GameWallProps = props;
    fixture.detectChanges(); 

    expect(div.childElementCount).toEqual(gameCount);

  });

});