import { Component } from '@angular/core';
import { GameService } from 'src/shared/services/game/game.service';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.scss'],
})
export class GameSelectorComponent {
  constructor(public game_service: GameService) {}
}
