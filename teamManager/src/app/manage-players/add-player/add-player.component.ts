import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../../player';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: Player = new Player();

  constructor(private dataService: DataService, private router: Router) { }


  onSubmit(e: Event, form: NgForm) {
    e.preventDefault();

    this.player = form.value;

    this.dataService.addPlayer(this.player)
      .subscribe(addedPlayer => {
        console.log(addedPlayer, 'successfully added');

        this.player = new Player();
        form.resetForm();

        this.router.navigate(['/players/list']);
      });
  }

  ngOnInit() {
  }

}
