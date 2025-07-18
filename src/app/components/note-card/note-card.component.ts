import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  onEdit(): void {
    this.edit.emit(this.note.id);
  }

  onDelete(): void {
    this.delete.emit(this.note.id); // Sadece delete emit ediyoruz
  }
}
