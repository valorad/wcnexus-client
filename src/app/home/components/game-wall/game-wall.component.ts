import { Component, OnInit } from '@angular/core';

interface IGameProfile {
  name: string,
  avatar: string,
}

@Component({
  selector: 'section [GameWallComponent]',
  templateUrl: './game-wall.component.html',
  styleUrls: ['./game-wall.component.scss']
})
export class GameWallComponent implements OnInit {

  games: IGameProfile[] = [];
  constructor() { }

  ngOnInit(): void {
      for (let i = 0; i < 30; i++) {
        this.games.push({
        name: `game-${i}`,
        avatar: `avatar of game-${i}`,
      });
    }
  }

}
