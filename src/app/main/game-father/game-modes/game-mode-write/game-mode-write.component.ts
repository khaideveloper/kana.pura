import { Component, OnDestroy } from '@angular/core';
import {
  KanaDictionaryElement,
  random_kana,
} from 'src/shared/models/kana.model';
import { Subscription } from 'rxjs';
import { GameService } from 'src/shared/services/game/game.service';

@Component({
  selector: 'app-game-mode-write',
  templateUrl: './game-mode-write.component.html',
  styleUrls: ['./game-mode-write.component.scss'],
})
export class GameModeWriteComponent implements OnDestroy {
  /** Element to guess */
  guess: KanaDictionaryElement;

  /** Input inserted by the user */
  input: string;

  /** Number of correct guesses */
  correct = 0;

  /** Number of incorrect guesses */
  incorrect = 0;

  /** Total number of guesses */
  total = 0;

  /** Filter changed subscription */
  filterchangeSub: Subscription;

  onpress = false;

  constructor(public gameService: GameService) {
    this.new_guess();
    // Event on filter change
    this.filterchangeSub = this.gameService.filter.filterChanged.subscribe(
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
    this.guess = random_kana(this.gameService.filter);
  }

  /** User trial to guess the symbol */
  try_guess() {
    if (this.input == null || this.input === '') {
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
