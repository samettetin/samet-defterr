import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  note: Note = {
    id: '',
    title: '',
    content: '',
    category: '',
    importance: 'Medium',
    favorite: false
  };

  isEditMode = false;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const noteId = this.route.snapshot.paramMap.get('id');
    if (noteId) {
      const foundNote = this.noteService.getNoteById(noteId);
      if (foundNote) {
        this.note = { ...foundNote };
        this.isEditMode = true;
      }
    }
  }

  onSave(note: Note): void {
    if (this.isEditMode) {
      this.noteService.updateNote(note);
    } else {
      const newNote: Note = {
        ...note,
        id: crypto.randomUUID(),
        date: new Date()
      };
      this.noteService.addNote(newNote);
    }

    this.router.navigate(['/']);
  }
}
