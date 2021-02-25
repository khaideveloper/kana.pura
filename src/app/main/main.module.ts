import { GameFatherComponent } from './game-father/game-father.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainPageRoutingModule } from './main-routing.module';
import { MainPage } from './main.page';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GameHeaderComponent } from 'src/app/main/game-father/game-header/game-header.component';
import { KanaSelectorComponent } from 'src/shared/components/kana-selector/kana-selector.component';
import { GameSelectorComponent } from './game-selector/game-selector.component';
import { GameSelectorFullComponent } from './game-selector/game-selector-full/game-selector-full.component';
import { GameSelectorGridComponent } from './game-selector/game-selector-grid/game-selector-grid.component';
import { GameModeDragComponent } from './game-father/game-modes/game-mode-drag/game-mode-drag.component';
import { GameModeFillComponent } from './game-father/game-modes/game-mode-fill/game-mode-fill.component';
import { GameModeFindComponent } from './game-father/game-modes/game-mode-find/game-mode-find.component';
import { GameModeGuessComponent } from './game-father/game-modes/game-mode-guess/game-mode-guess.component';
import { GameModeWriteComponent } from './game-father/game-modes/game-mode-write/game-mode-write.component';
import { SettingsSaverComponent } from 'src/shared/services/storage/settings-saver/settings-saver.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    MainPage,
    GameSelectorComponent,
    GameSelectorFullComponent,
    GameSelectorGridComponent,
    GameFatherComponent,
    GameModeDragComponent,
    GameModeFillComponent,
    GameModeFindComponent,
    GameModeGuessComponent,
    GameModeWriteComponent,
    KanaSelectorComponent,
    GameHeaderComponent,
    SettingsSaverComponent,
  ],
})
export class MainPageModule {}
