import { KANA_DICTIONARY_ELEMENT } from './../../models/kana.model';
import { GameService } from './../../services/game/game.service';
import { Component, Input } from '@angular/core';
import { KANA_DICTIONARY } from 'src/shared/models/kana.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-kana-selector',
  templateUrl: './kana-selector.component.html',
  styleUrls: ['./kana-selector.component.scss'],
})
export class KanaSelectorComponent {
  /** Kana values to show */
  _KANA_DICTIONARY = KANA_DICTIONARY;

  /** Currently active kana groups */
  active_groups: {
    HIRAGANA: boolean[];
    KATAKANA: boolean[];
  };

  constructor(
    public game_service: GameService,
    public modalController: ModalController
  ) {
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
    this.active_groups = {
      HIRAGANA: [],
      KATAKANA: [],
    };
    ['HIRAGANA', 'KATAKANA'].forEach((kana) => {
      this.game_service.filter[kana + '_GROUPS'].forEach((group: boolean[]) => {
        let active = true;
        group.forEach((element) => {
          if (!element) {
            active = false;
          }
        });
        this.active_groups[kana].push(active);
      });
    });
  }

  /** Method to activate/deactivate a group */
  checkbox_changed(kana: 'HIRAGANA' | 'KATAKANA', group: number) {
    this.game_service.filter.toggle_group(
      kana,
      group,
      this.active_groups[kana][group]
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
        this.game_service.filter.toggle_all();
        break;
      case 'kana':
        this.game_service.filter.toggle_kana(kana, value);
        break;
      case 'alt_kana':
        for (let i = 10; i < KANA_DICTIONARY[kana].length; i++) {
          this.game_service.filter.toggle_group(kana, i, value);
        }
        break;
    }
    this.game_service.filter.filterChanged.emit();
    this.update_active_groups();
  }
}
