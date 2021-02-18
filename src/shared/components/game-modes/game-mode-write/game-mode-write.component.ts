import { GameService } from './../../../services/game/game.service';
import { Component, OnDestroy } from '@angular/core';
import {
  KANA_DICTIONARY_ELEMENT,
  random_kana,
} from 'src/shared/models/kana.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-mode-write',
  templateUrl: './game-mode-write.component.html',
  styleUrls: ['./game-mode-write.component.scss'],
})
export class GameModeWriteComponent implements OnDestroy {
  /** Element to guess */
  guess: KANA_DICTIONARY_ELEMENT;

  /** Input inserted by the user */
  input: string;

  /** Number of correct guesses */
  correct: number = 0;

  /** Number of incorrect guesses */
  incorrect: number = 0;

  /** Total number of guesses */
  total: number = 0;

  /** Filter changed subscription */
  filterchangeSub: Subscription;

  onpress: boolean = false;

  constructor(public game_service: GameService) {
    this.new_guess();
    //Event on filter change
    this.filterchangeSub = this.game_service.filter.filterChanged.subscribe(
      () => {
        this.new_guess();
      }
    );
  }

  ngOnDestroy() {
    if (this.filterchangeSub != null) {
      this.filterchangeSub.unsubscribe();
    }
  }

  /** Change the symbol to guess */
  new_guess() {
    this.guess = random_kana(this.game_service.filter);
  }

  /** User trial to guess the symbol */
  try_guess() {
    if (this.input == null || this.input == '') {
      return;
    }
    if (this.onpress && this.input.length !== this.guess.values[0].length) {
      return;
    }
    if (this.guess.values.includes(this.input.toLowerCase())) {
      this.correct++;
    } else {
      this.incorrect++;
    }
    this.total++;
    this.input = '';
    this.new_guess();
  }

  enter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.try_guess();
    }
  }

  input_filter() {
    if (this.onpress) {
      this.try_guess();
    }
  }
}
