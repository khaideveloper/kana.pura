import { GameService } from 'src/shared/services/game/game.service';
import { Component } from '@angular/core';
import { KanaSelectorComponent } from '../kana-selector/kana-selector.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss'],
})
export class GameHeaderComponent {
  constructor(
    public game_service: GameService,
    public modalController: ModalController
  ) {}

  /** Opens the kana selector modal */
  async kana_selector() {
    this.game_service.kanaModal = await this.modalController.create({
      component: KanaSelectorComponent,
    });
    return await this.game_service.kanaModal.present();
  }
}
