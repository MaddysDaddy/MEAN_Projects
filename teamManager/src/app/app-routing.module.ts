import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ListComponent } from './manage-players/list/list.component';
import { AddPlayerComponent } from './manage-players/add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { GameOneComponent } from './player-status/game-one/game-one.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'players'
  },
  {
    path: 'players/list',
    pathMatch: 'full',
    component: ListComponent
  },
  {
    path: 'players/add',
    pathMatch: 'full',
    component: AddPlayerComponent
  },
  {
    path: 'players',
    pathMatch: 'full',
    redirectTo: 'players/list',
  },
  {
    path: 'status/game/:id',
    pathMatch: 'full',
    component: GameOneComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
