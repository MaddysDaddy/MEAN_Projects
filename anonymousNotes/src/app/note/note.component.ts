import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Output()
  newNote = new EventEmitter<Note>();
  note: Note = new Note();

  constructor() { }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(form.value);

    this.note = form.value;

    this.newNote.emit(this.note);

    this.note = new Note();

    form.reset();
  }

  ngOnInit() {
  }

}
