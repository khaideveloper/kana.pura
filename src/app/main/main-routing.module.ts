import { GameSelectorFullComponent } from './game-selector/game-selector-full/game-selector-full.component';
import { GameSelectorGridComponent } from './game-selector/game-selector-grid/game-selector-grid.component';
import { GameSelectorComponent } from './game-selector/game-selector.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameFatherComponent } from './game-father/game-father.component';
import { GameModeDragComponent } from './game-father/game-modes/game-mode-drag/game-mode-drag.component';
import { GameModeFillComponent } from './game-father/game-modes/game-mode-fill/game-mode-fill.component';
import { GameModeFindComponent } from './game-father/game-modes/game-mode-find/game-mode-find.component';
import { GameModeGuessComponent } from './game-father/game-modes/game-mode-guess/game-mode-guess.component';
import { GameModeWriteComponent } from './game-father/game-modes/game-mode-write/game-mode-write.component';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'selector'
      },
      {
        path: 'selector',
        component: GameSelectorComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'grid'
          },
          {
            path: 'grid',
            component: GameSelectorGridComponent
          },
          {
            path: 'full',
            component: GameSelectorFullComponent
          }
        ]
      },
      {
        path: 'game',
        component: GameFatherComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'main/selector/grid'
          },
          {
            path: 'drag',
            component: GameModeDragComponent
          },
          {
            path: 'fill',
            component: GameModeFillComponent
          },
          {
            path: 'find',
            component: GameModeFindComponent
          },
          {
            path: 'guess',
            component: GameModeGuessComponent
          },
          {
            path: 'write',
            component: GameModeWriteComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
