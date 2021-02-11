import { GameService } from 'src/shared/services/game/game.service';
import { KanaSelectorComponent } from './../kana-selector/kana-selector.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss'],
})
export class GameHeaderComponent implements OnInit {

  constructor(
    public game_service: GameService,
    public modalController: ModalController,
  ) {

  }

  ngOnInit() {}

  async openSelector() {
    const modal = await this.modalController.create({
      component: KanaSelectorComponent
    });
    return await modal.present();
  }

}
