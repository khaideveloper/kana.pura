import { GameService } from 'src/shared/services/game/game.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-saver',
  templateUrl: './settings-saver.component.html',
  styleUrls: ['./settings-saver.component.scss'],
})
export class SettingsSaverComponent {
  constructor(public gameService: GameService) {}
}
