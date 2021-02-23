import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public gameService: GameService, private router: Router) {
    /** Initialize grid */
    for (
      let i = 0;
      i < Math.ceil(this.gameService.gameModes.length / COL_NUMBER);
      i++
    ) {
      this.grid.push([]);
      for (let j = 0; j < COL_NUMBER; j++) {
        const element = i * COL_NUMBER + j;
        if (element < this.gameService.gameModes.length) {
          this.grid[this.grid.length - 1][j] = element;
        }
      }
    }
  }

  /** Opens the clicked element  */
  open_full(mode: number) {
    this.gameService.selectedGamemode = this.gameService.gameModes[mode];
    this.router.navigate(['/main/selector/full']);
  }
}
