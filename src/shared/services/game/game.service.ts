import { GAME_MODES } from './../../models/game.model';
import { Injectable } from '@angular/core';
import { KanaFilter } from 'src/shared/models/kana.model';

/** Different modes for the selector */
export enum SELECTOR_VIEW_MODE {
  GRID,
  FULL,
}

/** Element that represents a gamemode */
export interface GridGamemode {
  id: number;
  name: string;
  desc: string;
  icon: string;
  src: string;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  /** Current gamemode */
  // mode: GAME_MODES = null;

  /** Currently active filter */
  filter: KanaFilter;

  /** All the possible gamemodes */
  gameModes: GridGamemode[] = [];

  /** Currently active gamemode */
  selectedGamemode: GridGamemode;

  /** Reference to the kana selector modal */
  kanaModal: HTMLIonModalElement;

  constructor() {
    this.filter = new KanaFilter();
    this.filter.toggle_all();
    // Init of the gamemode array
    Object.keys(GAME_MODES)
      .filter((e) => isNaN(+e))
      .forEach((key, index) => {
        this.gameModes.push({
          id: index,
          name: 'GAMEMODE_' + key + '_NAME',
          desc: 'GAMEMODE_' + key + '_DESC',
          icon: 'GAMEMODE_' + key + '_ICON',
          src: key.toLowerCase()
        });
      });
  }
}
