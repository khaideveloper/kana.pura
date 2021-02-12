import { GameService } from './../../services/game/game.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.scss'],
})
export class GameSelectorComponent {
  constructor(public game_service: GameService) {}
}
