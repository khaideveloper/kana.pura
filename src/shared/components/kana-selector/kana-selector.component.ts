import { KANA_GROUP_TITLES } from './../../models/kana.model';
import { GameService } from './../../services/game/game.service';
import { Component } from '@angular/core';
import { KANA_DICTIONARY } from 'src/shared/models/kana.model';
import { ModalController } from '@ionic/angular';
import { element } from 'protractor';

@Component({
  selector: 'app-kana-selector',
  templateUrl: './kana-selector.component.html',
  styleUrls: ['./kana-selector.component.scss'],
})
export class KanaSelectorComponent {
  /** Kana values to show */
  _KANA_DICTIONARY = KANA_DICTIONARY;

  /** Kana group titles */
  _KANA_GROUP_TITLES = KANA_GROUP_TITLES;

  /** All the elements in a group made to be a single string */
  mixed_kana_elements: {
    HIRAGANA: string[],
    KATAKANA: string[]
  };

  kanas: ('HIRAGANA' | 'KATAKANA')[] = ['HIRAGANA', 'KATAKANA'];

  /** Currently active kana groups */
  activeGroups: {
    HIRAGANA: boolean[];
    KATAKANA: boolean[];
  };

  constructor(
    public gameService: GameService,
    public modalController: ModalController
  ) {
    this.mixed_kana_elements = {
      HIRAGANA: new Array<string>(),
      KATAKANA: new Array<string>()
    };
    this.kanas.forEach((kana) => {
      this._KANA_DICTIONARY[kana].forEach((group) => {
        let value = '';
        group.forEach((element) => { value += element.kana; });
        this.mixed_kana_elements[kana].push(value);
      });
    });
    this.update_active_groups();
  }

  /** Close this modal */
  close() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  /** Updates the current active kana groups */
  update_active_groups() {
    this.activeGroups = {
      HIRAGANA: [],
      KATAKANA: [],
    };
    this.kanas.forEach((kana) => {
      this.gameService.filter[kana + '_GROUPS'].forEach((group: boolean[]) => {
        let active = true;
        group.forEach((element) => {
          if (!element) {
            active = false;
          }
        });
        this.activeGroups[kana].push(active);
      });
    });
  }

  /** Method to activate/deactivate a group */
  checkbox_changed(kana: 'HIRAGANA' | 'KATAKANA', group: number) {
    this.gameService.filter.toggle_group(
      kana,
      group,
      this.activeGroups[kana][group]
    );
  }

  /** Toggle for a specific set of the kana */
  group_toggle(
    element: 'all' | 'kana' | 'alt_kana',
    kana?: 'HIRAGANA' | 'KATAKANA',
    value?: boolean
  ) {
    if (
      element == null ||
      (element !== 'all' && (kana == null || value == null))
    ) {
      return;
    }
    switch (element) {
      case 'all':
        this.gameService.filter.toggle_all();
        break;
      case 'kana':
        this.gameService.filter.toggle_kana(kana, value);
        break;
      case 'alt_kana':
        for (let i = 10; i < KANA_DICTIONARY[kana].length; i++) {
          this.gameService.filter.toggle_group(kana, i, value);
        }
        break;
    }
    this.gameService.filter.filterChanged.emit();
    this.update_active_groups();
  }
}
