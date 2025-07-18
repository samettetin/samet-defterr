import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  @Input() note: Note = {
    id: '',
    title: '',
    content: '',
    category: '',
    importance: 'Medium',
    favorite: false
  };

  @Output() save = new EventEmitter<Note>();

  ngOnInit(): void {
    if (!this.note.id) {
      this.note.id = crypto.randomUUID();
    }
  }

  onSubmit(): void {
    this.save.emit(this.note);
  }
}
