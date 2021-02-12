import { Component } from '@angular/core';
import { GameService } from 'src/shared/services/game/game.service';

@Component({
  selector: 'app-game-selector-full',
  templateUrl: './game-selector-full.component.html',
  styleUrls: ['./game-selector-full.component.scss'],
})
export class GameSelectorFullComponent {
  constructor(public game_service: GameService) {}
}
