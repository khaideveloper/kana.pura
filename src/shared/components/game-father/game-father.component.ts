import { GameService } from './../../services/game/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-father',
  templateUrl: './game-father.component.html',
  styleUrls: ['./game-father.component.scss'],
})
export class GameFatherComponent implements OnInit {

  constructor(
    public game_service: GameService,
  ) {

  }

  ngOnInit() {}
}
