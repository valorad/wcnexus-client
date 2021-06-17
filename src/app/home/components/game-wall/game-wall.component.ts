import { Component, OnInit } from '@angular/core';
import { IInstanceCardProps } from 'src/app/models/interfaces/instantcard.interface';
import { INexus } from 'src/app/models/interfaces/nexus.interface';


@Component({
  selector: 'home-game-wall',
  templateUrl: './game-wall.component.html',
  styleUrls: ['./game-wall.component.scss']
})
export class GameWallComponent implements OnInit {

  games: INexus[] = [];

  baseStyle = {
    "background-color": "#1e1e1e",
    width: "3em",
    height: "3em",
  };

  gameToInstance = (game: INexus): IInstanceCardProps => ({
    name: game.name,
    image: game.logo,
    styles: {
      image: this.baseStyle,
      title: {
        display: "none",
      }
    }
  });

  constructor() { }

  ngOnInit(): void {
      for (let i = 0; i < 30; i++) {
        this.games.push({
        name: `game-${i}`,
        logo: `ag${i}`,
      } as INexus);
    }
  }

}
