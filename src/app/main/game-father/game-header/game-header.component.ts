import { GameService } from 'src/shared/services/game/game.service';
import { Component } from '@angular/core';
import { KanaSelectorComponent } from 'src/shared/components/kana-selector/kana-selector.component';
import { ModalController, PopoverController } from '@ionic/angular';
import { SettingsSaverComponent } from 'src/shared/services/storage/settings-saver/settings-saver.component';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss'],
})
export class GameHeaderComponent {
  constructor(
    public gameService: GameService,
    public modalController: ModalController,
    public popoverController: PopoverController,
  ) {}

  async showPopover(event: MouseEvent) {
    const popover = await this.popoverController.create({
      component: SettingsSaverComponent,
      showBackdrop: false,
      backdropDismiss: true,
      translucent: true,
      event,
      animated: true,
    });
    return await popover.present();
  }

  /** Opens the kana selector modal */
  async kana_selector() {
    this.gameService.kanaModal = await this.modalController.create({
      component: KanaSelectorComponent,
    });
    return await this.gameService.kanaModal.present();
  }
}
