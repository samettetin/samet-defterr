import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-encrypted-note',
  templateUrl: './encrypted-note.component.html',
  styleUrls: ['./encrypted-note.component.scss']
})
export class EncryptedNoteComponent {
  note: Note = {
    id: Date.now().toString(),
    title: '',
    content: '',
    category: '',
    importance: 'Medium',
    favorite: false
  };

  constructor(
    private noteService: NoteService,
    public router: Router
  ) {}

  saveNote() {
    this.note.id = Date.now().toString();

    const notes = JSON.parse(localStorage.getItem('encrypted-notes') || '[]');
    notes.push(this.note);
    localStorage.setItem('encrypted-notes', JSON.stringify(notes));

    alert('✅ Not başarıyla kaydedildi.');
    this.router.navigate(['/']);
  }
}
