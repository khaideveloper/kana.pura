import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { GameService } from 'src/shared/services/game/game.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-game-selector-full',
  templateUrl: './game-selector-full.component.html',
  styleUrls: ['./game-selector-full.component.scss'],
})
export class GameSelectorFullComponent implements OnDestroy {
  backSub: Subscription;
  constructor(public game_service: GameService, private platform: Platform) {
    this.backSub = this.platform.backButton.subscribeWithPriority(10, () => {
      this.goBack();
    });
  }

  goBack() {
    this.game_service.current_view = 0;
  }

  ngOnDestroy() {
    if (this.backSub != null) {
      this.backSub.unsubscribe();
    }
  }
}
