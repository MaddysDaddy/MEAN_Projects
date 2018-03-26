import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from '../player';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private base = '/api/players';

  constructor(private http: Http) { }

  getPlayers() {
    console.log('getting players...');
    return this.http.get(this.base)
      .map(response => response.json());
  }

  addPlayer(player: Player) {
    console.log('saving player...');
    return this.http.post(this.base, player)
      .map(response => response.json());
  }

  removePlayer(id) {
    console.log('deleting player', id);
    return this.http.delete(this.base + '/' + id)
      .map(response => response.json());
  }

  updatePlayer(player: Player) {
    console.log('data service updating status', player);
    return this.http.put(this.base, player);
  }
}
