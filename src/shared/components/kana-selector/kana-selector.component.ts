import { Component, OnInit } from '@angular/core';
import { KANA_DICTIONARY, KANA_DICTIONARY_ELEMENT } from 'src/shared/models/kana.model';

@Component({
  selector: 'app-kana-selector',
  templateUrl: './kana-selector.component.html',
  styleUrls: ['./kana-selector.component.scss'],
})
export class KanaSelectorComponent implements OnInit {

  _KANA_DICTIONARY = KANA_DICTIONARY;

  HIRAGANA_TH = [
    ' ', 'K', 'S', 'T', 'N', 'H', 'M', 'Y', 'R', ' ', 'G', 'Z', 'D', 'B', 'P', 'KY', 'SH', 'CH', 'NY', 'HY', 'MY', 'RY', 'GY', 'JY', 'BY', 'PY'
  ]

  KATAKANA_TH = [
    ' ', 'K', 'S', 'T', 'N', 'H', 'M', 'Y', 'R', ' ', 'G', 'Z', 'D', 'B', 'P', 'KY', 'SH', 'CH', 'NY', 'HY', 'MY', 'RY', 'GY', 'JY', 'BY', 'PY', 'F', 'V/W', 'TS', ' '
  ]

  constructor() { }

  ngOnInit() {}

}
