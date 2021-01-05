import { Component, OnInit } from '@angular/core';

interface IGameProfile {
  name: string,
  image: string,
}

@Component({
  selector: 'home-game-wall',
  templateUrl: './game-wall.component.html',
  styleUrls: ['./game-wall.component.scss']
})
export class GameWallComponent implements OnInit {

  games: IGameProfile[] = [];

  baseStyle = {
    "background-color": "#1e1e1e",
    width: "3em",
    height: "3em",
  };

  gameToInstance = (game: IGameProfile) => {
    return {
      ...game,
      children: {
        image: {
          styles: this.baseStyle
        },
        title: {
          styles: {
            display: "none"
          }
        }
      },
    }
  };

  constructor() { }

  ngOnInit(): void {
      for (let i = 0; i < 30; i++) {
        this.games.push({
        name: `game-${i}`,
        image: `ag${i}`,
      });
    }
  }

}
