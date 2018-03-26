import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  players: Array<Player> = [];

  constructor(private dataService: DataService, private router: Router) { }

  getPlayers() {
    this.players = this.dataService.matchedPlayers;
    console.log(this.players);
  }

  ngOnInit() {
    this.getPlayers();
  }

}
