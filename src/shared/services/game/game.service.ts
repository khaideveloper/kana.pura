import { GAME_MODES } from './../../models/game.model';
import { Injectable } from '@angular/core';
import { KANA_FILTER } from 'src/shared/models/kana.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  /** Modalità attualmente attiva */
  mode: GAME_MODES = null;

  /** Array con tutte le possibili attività */
  _GAME_MODES: string[] = Object.keys(GAME_MODES).filter(e => !isNaN(+e));

  /** Filtro dei kana attualmente attivo */
  filter: KANA_FILTER;

  constructor(

  ) {
    this.filter = new KANA_FILTER();
    this.filter.toggle_all();
  }

  /** Cambia la modalità con quella passata */
  changeMode(mode: GAME_MODES) {
    if(mode == null || mode >= this._GAME_MODES.length || mode < 0) { return; }
    this.mode = mode;
  }

}
