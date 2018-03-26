import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { ListComponent } from './manage-players/list/list.component';
import { AddPlayerComponent } from './manage-players/add-player/add-player.component';
import { NavigationComponent } from './navigation/navigation.component';

import { DataService } from './services/data.service';
import { GameOneComponent } from './player-status/game-one/game-one.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagePlayersComponent,
    PlayerStatusComponent,
    ListComponent,
    AddPlayerComponent,
    NavigationComponent,
    GameOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
