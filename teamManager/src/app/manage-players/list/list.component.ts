import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Player } from '../../player';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players: Array<Player> = [];

  constructor(private dataService: DataService) { }

  getPlayers() {
    this.dataService.getPlayers()
      .subscribe(players => { this.players = players; console.log(this.players); });
  }

  removePlayer(e: Event, id) {
    console.log(id);
    if (!confirm('You sure you want to remove this player?')) {
      e.preventDefault();
    } else {
      this.dataService.removePlayer(id)
        .subscribe(removedPlayer => this.players.splice(this.players.indexOf(removedPlayer), 1));
    }

  }

  ngOnInit() {
    this.getPlayers();
  }

}
