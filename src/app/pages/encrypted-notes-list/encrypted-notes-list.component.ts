import { Component } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-encrypted-notes-list',
  templateUrl: './encrypted-notes-list.component.html',
  styleUrls: ['./encrypted-notes-list.component.scss']
})
export class EncryptedNotesListComponent {
  allNotes: Note[] = [];

  constructor() {
    const data = localStorage.getItem('encrypted-notes');
    if (data) {
      this.allNotes = JSON.parse(data);
    }
  }
}
