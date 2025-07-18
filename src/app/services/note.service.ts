import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notesKey = 'notes';
  private trashKey = 'trashedNotes'; // 🗑️ Çöp kutusu anahtarı

  // 🔹 Tüm notları getir
  getNotes(): Note[] {
    const notes = localStorage.getItem(this.notesKey);
    return notes ? JSON.parse(notes) : [];
  }

  // 🔹 Notları kaydet
  saveNotes(notes: Note[]): void {
    localStorage.setItem(this.notesKey, JSON.stringify(notes));
  }

  // 🔹 Yeni not ekle
  addNote(note: Note): void {
    const notes = this.getNotes();
    notes.push(note);
    this.saveNotes(notes);
  }

  // 🔹 Notu güncelle
  updateNote(updatedNote: Note): void {
    const notes = this.getNotes().map(n =>
      n.id === updatedNote.id ? updatedNote : n
    );
    this.saveNotes(notes);
  }

  // 🔴 Notu silerken çöp kutusuna taşı
  deleteNote(id: string): void {
    const notes = this.getNotes();
    const noteToTrash = notes.find(n => n.id === id);
    if (noteToTrash) {
      this.addToTrash(noteToTrash);
    }

    const updatedNotes = notes.filter(n => n.id !== id);
    this.saveNotes(updatedNotes);
  }

  // 🔹 Belirli notu getir
  getNoteById(id: string): Note | undefined {
    return this.getNotes().find(n => n.id === id);
  }

  // 🗑️ Çöp kutusuna not ekle
  addToTrash(note: Note): void {
    const trashed = this.getTrashedNotes();
    localStorage.setItem(this.trashKey, JSON.stringify([...trashed, note]));
  }

  // 🗑️ Çöp kutusundaki notları getir
  getTrashedNotes(): Note[] {
    const trashed = localStorage.getItem(this.trashKey);
    return trashed ? JSON.parse(trashed) : [];
  }

  // 🗑️ Çöp kutusundan notu sil (kalıcı silme)
  permanentlyDeleteNote(id: string): void {
    const trashed = this.getTrashedNotes().filter(n => n.id !== id);
    localStorage.setItem(this.trashKey, JSON.stringify(trashed));
  }

  // 🔁 Çöp kutusundaki notu geri yükle
  restoreNote(id: string): void {
    const trashed = this.getTrashedNotes();
    const noteToRestore = trashed.find(n => n.id === id);
    if (noteToRestore) {
      this.addNote(noteToRestore);
      const updatedTrash = trashed.filter(n => n.id !== id);
      localStorage.setItem(this.trashKey, JSON.stringify(updatedTrash));
    }
  }
}
