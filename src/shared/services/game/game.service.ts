import { GAME_MODES } from './../../models/game.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  mode: GAME_MODES = null;

  _GAME_MODES: string[] = Object.keys(GAME_MODES).filter(e => !isNaN(+e));

  constructor(

  ) {

  }

  changeMode(mode: GAME_MODES) {
    if(mode == null || mode >= this._GAME_MODES.length || mode < 0) { return; }
    this.mode = mode;
  }

}
