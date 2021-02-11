import { GameSelectorGridComponent } from "./../../shared/components/game-selector/game-selector-grid/game-selector-grid.component";
import { GameSelectorFullComponent } from "./../../shared/components/game-selector/game-selector-full/game-selector-full.component";
import { GameSelectorComponent } from "./../../shared/components/game-selector/game-selector.component";
import { GameFatherComponent } from "./../../shared/components/game-father/game-father.component";
import { GameModeWriteComponent } from "./../../shared/components/game-modes/game-mode-write/game-mode-write.component";
import { GameModeGuessComponent } from "./../../shared/components/game-modes/game-mode-guess/game-mode-guess.component";
import { GameModeFindComponent } from "./../../shared/components/game-modes/game-mode-find/game-mode-find.component";
import { GameModeFillComponent } from "./../../shared/components/game-modes/game-mode-fill/game-mode-fill.component";
import { GameModeDragComponent } from "./../../shared/components/game-modes/game-mode-drag/game-mode-drag.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MainPageRoutingModule } from "./main-routing.module";
import { MainPage } from "./main.page";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { GameHeaderComponent } from "src/shared/components/game-header/game-header.component";
import { KanaSelectorComponent } from "src/shared/components/kana-selector/kana-selector.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
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
  ],
})
export class MainPageModule {}
