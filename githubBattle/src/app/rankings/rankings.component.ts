import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  players: Array<Player> = [];

  constructor(private dataService: DataService, private router: Router) { }

  getPlayers() {
    this.dataService.getPlayers()
      .subscribe(players => {
        this.players = players;
        console.log(this.players);
      });
  }

  ngOnInit() {
    this.getPlayers();
  }

}
