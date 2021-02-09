import { Component, OnInit } from '@angular/core';
import { KANA_DICTIONARY_ELEMENT, KANA_FILTER, random_kana } from './models/kana.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  element: KANA_DICTIONARY_ELEMENT;
  test = new KANA_FILTER();

  value: string;

  current: number = 0;
  total: number = 0;

  constructor() {

    this.test.toggle_all();
    this.element = random_kana(this.test);

  }

  ngOnInit() {}

  faf() {
    if(this.element.values.includes(this.value.toLowerCase())) {
      this.current++;
    }
    this.total++;
    this.value = '';
    this.element = random_kana(this.test);
  }

}
