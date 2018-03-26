import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Note } from '../note';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private base = '/api/notes';

  constructor(private http: Http) { }

  createNote(note: Note): Observable<Note> {
    console.log('saving note...');
    return this.http.post(this.base, note)
      .map(response => response.json());
  }

  getNotes() {
    console.log('getting notes...');
    return this.http.get(this.base)
      .map(notes => notes.json());
  }


}
