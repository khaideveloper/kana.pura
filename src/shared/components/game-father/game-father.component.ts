import { GameService } from './../../services/game/game.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-father',
  templateUrl: './game-father.component.html',
  styleUrls: ['./game-father.component.scss'],
})
export class GameFatherComponent {
  constructor(public game_service: GameService) {}
}
