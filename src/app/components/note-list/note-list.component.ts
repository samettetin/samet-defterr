import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {
  @Input() notes: Note[] = [];
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  onEdit(id: string): void {
    this.edit.emit(id);
  }

  onDelete(id: string): void {
    const confirmed = confirm('Bu notu silmek istediğinize emin misiniz?');
    if (confirmed) {
      this.delete.emit(id);
    }
  }
}
