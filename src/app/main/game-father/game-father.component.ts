import { GameService } from '../../../shared/services/game/game.service';
import { Component, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-father',
  templateUrl: './game-father.component.html',
  styleUrls: ['./game-father.component.scss'],
})
export class GameFatherComponent implements OnDestroy {
  backSub: Subscription;
  constructor(public gameService: GameService, private platform: Platform) {
    this.backSub = this.platform.backButton.subscribeWithPriority(10, () => {
      this.goBack();
    });
  }

  goBack() {
    // this.gameService.current_view = 1;
    // this.gameService.mode = null;
  }

  ngOnDestroy() {
    if (this.backSub != null) {
      this.backSub.unsubscribe();
    }
  }
}
