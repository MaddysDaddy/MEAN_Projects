import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from '../player';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { GitUser } from '../gituser';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  firstPlayer: any;
  secondPlayer: any;

  pOneError: string;
  pTwoError: string;

  playerOne: GitUser = new GitUser();
  playerTwo: GitUser = new GitUser();

  constructor(private dataService: DataService, private router: Router) { }

  getPlayerOne(e: Event, form: NgForm) {
    e.preventDefault();
    const player = form.value;
    this.dataService.retrieveGitUser(player)
      .subscribe(foundPlayer => {
        this.firstPlayer = foundPlayer;
        console.log(this.firstPlayer);
      }, error => {
        this.pOneError = 'Github user not found!';
      });
  }

  getPlayerTwo(e: Event, form: NgForm) {
    e.preventDefault();
    const player = form.value;
    this.dataService.retrieveGitUser(player)
      .subscribe(foundPlayer => {
        this.secondPlayer = foundPlayer;
        console.log(this.secondPlayer);
      }, error => {
        this.pTwoError = 'Github user not found!';
      });
  }

  doBattle() {
    const pOneScore = this.firstPlayer.followers + this.firstPlayer.public_repos;
    const pTwoScore = this.secondPlayer.followers + this.secondPlayer.public_repos;

    const players: Array<Player> = [];

    const pOne = new Player();
    pOne.username = this.firstPlayer.login;
    pOne.score = pOneScore;
    pOne.avatar = this.firstPlayer.avatar_url;

    const pTwo = new Player();
    pTwo.username = this.secondPlayer.login;
    pTwo.score = pTwoScore;
    pTwo.avatar = this.secondPlayer.avatar_url;

    if (pOne.score > pTwo.score) {
      console.log('saving to data service...');
      this.dataService.matchedPlayers = [pOne, pTwo];
    } else if (pTwo.score > pOne.score) {
      console.log('saving to data service...');
      this.dataService.matchedPlayers = [pTwo, pOne];
    }

    console.log(pOne, pTwo);
    players.push(pOne, pTwo);

    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
      this.dataService.createUser(players[i])
        .subscribe(addedPlayer => {
          console.log(addedPlayer, 'successfully added!');
        });
    }
    this.router.navigate(['/results']);
  }

  ngOnInit() {
  }

}
