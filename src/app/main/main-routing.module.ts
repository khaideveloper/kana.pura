import { GameSelectorFullComponent } from './game-home/game-selector-full/game-selector-full.component';
import { GameSelectorGridComponent } from './game-home/game-selector-grid/game-selector-grid.component';
import { GameHomeComponent } from './game-home/game-home.component';
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
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: GameHomeComponent,
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
            redirectTo: 'main/home/grid'
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
