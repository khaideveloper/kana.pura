import { Component } from '@angular/core';
import { GameService } from 'src/shared/services/game/game.service';

/** Number of columns in the grid */
export const COL_NUMBER = 2;

@Component({
  selector: 'app-game-selector-grid',
  templateUrl: './game-selector-grid.component.html',
  styleUrls: ['./game-selector-grid.component.scss'],
})
export class GameSelectorGridComponent {

  /** Grid array to initialize the HTML element */
  grid: any[][] = [];

  constructor(
    public game_service: GameService,
  ) {
    /** Initialize grid */
    for(let i = 0 ; i < Math.ceil(this.game_service.game_modes.length/COL_NUMBER) ; i++) {
      this.grid.push([]);
      for(let j = 0 ; j < COL_NUMBER; j++) {
        let element = ((i*COL_NUMBER) + j);
        if(element < this.game_service.game_modes.length) {
          this.grid[this.grid.length-1][j] = element;
        }
      }
    }
  }

  /** Opens the clicked element  */
  open_full(mode: number) {
    this.game_service.current_view = 1;
    this.game_service.selected_gamemode = this.game_service.game_modes[mode];
  }

}
