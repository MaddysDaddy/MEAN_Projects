import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  base = 'https://api.github.com/users/';

  mongobase = '/api/players';

  matchedPlayers = [];

  constructor(private http: Http) { }

  retrieveGitUser(gitUser: Player) {

    return this.http.get(this.base + gitUser.username)
      .map(response => response.json());
  }

  getPlayers() {
    return this.http.get(this.mongobase)
      .map(response => response.json());
  }

  createUser(player: Player) {
    return this.http.post(this.mongobase, player)
      .map(response => response.json());
  }
}
