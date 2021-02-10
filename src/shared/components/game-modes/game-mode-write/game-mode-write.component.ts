import { GameService } from './../../../services/game/game.service';
import { Component, OnInit } from '@angular/core';
import { KANA_DICTIONARY_ELEMENT, KANA_FILTER, random_kana } from 'src/shared/models/kana.model';

@Component({
  selector: 'app-game-mode-write',
  templateUrl: './game-mode-write.component.html',
  styleUrls: ['./game-mode-write.component.scss'],
})
export class GameModeWriteComponent {

  /** Element to guess */
  guess: KANA_DICTIONARY_ELEMENT;

  /** Testo inserito nell'input */
  input: string;

  /** Numero di tentativi corretti */
  correct: number = 0;

  /** Numero di tentativi errati */
  incorrect: number = 0;

  /** Numero di tentativi */
  total: number = 0;

  constructor(
    public game_service: GameService,
  ) {
  }

  /** Inizia a giocare */
  start() {
    this.new_guess();
  }

  /** Cambia l'elemento da indovinare */
  new_guess() {
    this.guess = random_kana(this.game_service.filter);
  }

  /** Prova a indovinare l'elemento */
  try_guess() {
    if(this.guess.values.includes(this.input.toLowerCase())) {
      this.correct++;
    } else {
      this.incorrect++;
    }
    this.total++;
    this.input = '';
    this.new_guess();
  }

  input_filter(event: KeyboardEvent) {
    console.log(event);
    if(event.key === "Enter") {
      this.try_guess();
    }
  }

}
