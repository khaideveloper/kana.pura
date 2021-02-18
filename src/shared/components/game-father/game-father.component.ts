import { GameService } from './../../services/game/game.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-game-father',
  templateUrl: './game-father.component.html',
  styleUrls: ['./game-father.component.scss'],
})
export class GameFatherComponent implements OnDestroy {
  backSub: Subscription;
  constructor(public game_service: GameService, private platform: Platform) {
    this.backSub = this.platform.backButton.subscribeWithPriority(10, () => {
      this.goBack();
    });
  }

  goBack() {
    this.game_service.current_view = 1;
    this.game_service.mode = null;
  }

  ngOnDestroy() {
    if (this.backSub != null) {
      this.backSub.unsubscribe();
    }
  }
}
