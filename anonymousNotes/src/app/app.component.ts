import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Anonymous Notes';
  notes: Array<Note> = [];

  constructor(private dataService: DataService) {}

  createNote(note: Note) {
    this.dataService.createNote(note).subscribe(createdNote => {
      console.log(createdNote);
      this.notes = [createdNote, ...this.notes];
      // this.notes.push(createdNote);
      console.log(this.notes);
    });
  }

  getNotes() {
    this.dataService.getNotes().subscribe(notes => {
      this.notes = notes;
      console.log(this.notes);
    });
  }

  ngOnInit() {
    this.getNotes();
  }
}
