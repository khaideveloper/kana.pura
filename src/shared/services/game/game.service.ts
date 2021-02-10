import { GAME_MODES } from './../../models/game.model';
import { Injectable } from '@angular/core';
import { KANA_FILTER } from 'src/shared/models/kana.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  /** Current gamemode */
  mode: GAME_MODES = null;

  /** All the possible gamemodes */
  _GAME_MODES: string[] = Object.keys(GAME_MODES).filter(e => !isNaN(+e));

  /** Currently active filter */
  filter: KANA_FILTER;

  constructor(
  ) {
    this.filter = new KANA_FILTER();
    this.filter.toggle_all();
  }

  /** Changes the current gamemode */
  changeMode(mode: GAME_MODES) {
    if(mode == null || mode >= this._GAME_MODES.length || mode < 0) { return; }
    this.mode = mode;
  }

}
