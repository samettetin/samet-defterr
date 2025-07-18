// src/app/pages/trash-notes/trash-notes.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  trashedNotes: any[] = [];

  ngOnInit(): void {
    const stored = localStorage.getItem('trashedNotes');
    this.trashedNotes = stored ? JSON.parse(stored) : [];
  }

  restoreNote(noteId: string): void {
    const stored = localStorage.getItem('notes');
    let notes = stored ? JSON.parse(stored) : [];
    const noteToRestore = this.trashedNotes.find(n => n.id === noteId);
    if (noteToRestore) {
      notes.push(noteToRestore);
      localStorage.setItem('notes', JSON.stringify(notes));
      this.trashedNotes = this.trashedNotes.filter(n => n.id !== noteId);
      localStorage.setItem('trashedNotes', JSON.stringify(this.trashedNotes));
    }
  }

  permanentlyDelete(noteId: string): void {
    this.trashedNotes = this.trashedNotes.filter(n => n.id !== noteId);
    localStorage.setItem('trashedNotes', JSON.stringify(this.trashedNotes));
  }
}
