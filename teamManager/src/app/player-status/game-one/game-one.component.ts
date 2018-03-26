import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Player } from '../../player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {

  game: number = 1;

  players: Array<Player> = [];

  constructor(
    private dataService: DataService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.paramMap.subscribe(params => {
      this.game = parseInt(params.get('id'), 10);
      console.log(this.game);
    });
  }

  getPlayers() {
    this.dataService.getPlayers()
      .subscribe(players => { this.players = players; console.log(this.players); });
  }

  updateStatus(e: Event, status: string, player: Player) {

    if (this.game === 1) {
      player.status_g1 = status;
    } else if (this.game === 2) {
      player.status_g2 = status;
    } else if (this.game === 3) {
      player.status_g3 = status;
    }

    console.log('game-component: ', player);
    this.dataService.updatePlayer(player)
      .subscribe(updatedPlayer => console.log(updatedPlayer));
  }

  ngOnInit() {
    this.getPlayers();
  }

}
