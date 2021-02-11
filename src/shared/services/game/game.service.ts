import { GAME_MODES } from './../../models/game.model';
import { Injectable } from '@angular/core';
import { KANA_FILTER } from 'src/shared/models/kana.model';

/** Different modes for the selector */
export enum SELECTOR_VIEW_MODE {
  GRID,
  FULL,
}

/** Element that represents a gamemode */
export interface GRID_GAMEMODE {
  id: number;
  name: string;
  desc: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {

  /** Current gamemode */
  mode: GAME_MODES = null;

  /** Currently active filter */
  filter: KANA_FILTER;

  /** All the possible gamemodes */
  game_modes: GRID_GAMEMODE[] = [];

  /** Currently active view in the game selector */
  current_view: SELECTOR_VIEW_MODE = 0;

  /** Currently active gamemode */
  selected_gamemode: GRID_GAMEMODE;

  constructor() {
    this.filter = new KANA_FILTER();
    this.filter.toggle_all();
    //Init of the gamemode array
    Object.keys(GAME_MODES)
      .filter((e) => isNaN(+e))
      .forEach((key, index) => {
        this.game_modes.push({
          id: index,
          name: 'GAMEMODE_' + key + '_NAME',
          desc: 'GAMEMODE_' + key + '_DESC',
          icon: 'GAMEMODE_' + key + '_ICON',
        });
      });
  }

  /** Start a new game with the passed mode */
  start_game(mode: number) {
    this.mode = mode;
  }

}
