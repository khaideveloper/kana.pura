import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { GameService } from 'src/shared/services/game/game.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-selector-full',
  templateUrl: './game-selector-full.component.html',
  styleUrls: ['./game-selector-full.component.scss'],
})
export class GameSelectorFullComponent implements OnDestroy {
  backSub: Subscription;
  constructor(public gameService: GameService, private platform: Platform, private router: Router) {
    this.backSub = this.platform.backButton.subscribeWithPriority(10, () => {
      this.goBack();
    });
  }

  goBack() {
    this.router.navigate(['/main/selector/grid']);
  }

  play() {
    this.router.navigate(['/main/game/' + this.gameService.selectedGamemode.src]);
  }

  ngOnDestroy() {
    if (this.backSub != null) {
      this.backSub.unsubscribe();
    }
  }
}
