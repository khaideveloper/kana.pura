import { GameService } from './../../services/game/game.service';
import { Component } from '@angular/core';
import { KANA_DICTIONARY } from 'src/shared/models/kana.model';

@Component({
  selector: 'app-kana-selector',
  templateUrl: './kana-selector.component.html',
  styleUrls: ['./kana-selector.component.scss'],
})
export class KanaSelectorComponent {
  _KANA_DICTIONARY = KANA_DICTIONARY;

  HIRAGANA_TH = [
    ' ',
    'K',
    'S',
    'T',
    'N',
    'H',
    'M',
    'Y',
    'R',
    ' ',
    'G',
    'Z',
    'D',
    'B',
    'P',
    'KY',
    'SH',
    'CH',
    'NY',
    'HY',
    'MY',
    'RY',
    'GY',
    'JY',
    'BY',
    'PY',
  ];

  KATAKANA_TH = [
    ' ',
    'K',
    'S',
    'T',
    'N',
    'H',
    'M',
    'Y',
    'R',
    ' ',
    'G',
    'Z',
    'D',
    'B',
    'P',
    'KY',
    'SH',
    'CH',
    'NY',
    'HY',
    'MY',
    'RY',
    'GY',
    'J',
    'BY',
    'PY',
    'F',
    'V/W',
    'TS',
    ' ',
    ' ',
  ];

  constructor(public game_service: GameService) {}

  button(element: string) {
    switch (element) {
      case 'all':
        this.game_service.filter.toggle_all();
        break;
      case 'enable_hiragana':
        this.game_service.filter.toggle_kana('HIRAGANA', true);
        break;
      case 'disable_hiragana':
        this.game_service.filter.toggle_kana('HIRAGANA', false);
        break;
      case 'all_alt_hiragana':
        for (let i = 10; i < this.HIRAGANA_TH.length; i++) {
          this.game_service.filter.toggle_group('HIRAGANA', i, true);
        }
        break;
      case 'no_alt_hiragana':
        for (let i = 10; i < this.HIRAGANA_TH.length; i++) {
          this.game_service.filter.toggle_group('HIRAGANA', i, false);
        }
        break;
      case 'enable_katakana':
        this.game_service.filter.toggle_kana('KATAKANA', true);
        break;
      case 'disable_katakana':
        this.game_service.filter.toggle_kana('KATAKANA', false);
        break;
      case 'all_alt_katakana':
        for (let i = 10; i < this.KATAKANA_TH.length; i++) {
          this.game_service.filter.toggle_group('KATAKANA', i, true);
        }
        break;
      case 'no_alt_katakana':
        console.log(this.KATAKANA_TH.length);
        console.log(this._KANA_DICTIONARY.KATAKANA.length);
        for (let i = 10; i < this.KATAKANA_TH.length; i++) {
          this.game_service.filter.toggle_group('KATAKANA', i, false);
        }
        break;
    }
  }
}
