import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnChanges {

  @Input()
  notes = [];

  constructor(private dataService: DataService) { }

  ngOnChanges(changes) {
    console.log('changes on list:', changes);
  }

  ngOnInit() {
  }

}
