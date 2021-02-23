import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameFatherComponent } from './game-father/game-father.component';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'selector',
        component: GameFatherComponent,
        children: [
          {
            path: ''
          }
        ]
      },
      {
        path: 'game',
        component: GameFatherComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
