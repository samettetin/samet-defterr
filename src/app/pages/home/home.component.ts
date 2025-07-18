// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notes: Note[] = [];
  filteredNotes: Note[] = [];

  searchText = '';
  importanceFilter = '';
  categoryFilter = '';
  filterFavoritesOnly = false;
  isDarkMode = false;

  constructor(
    private noteService: NoteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const darkPref = localStorage.getItem('dark-mode');
    if (darkPref === 'enabled') {
      document.body.classList.add('dark-mode');
      this.isDarkMode = true;
    }

    this.loadNotes();
  }

  loadNotes(): void {
    const allNotes = this.noteService.getNotes();
    this.filteredNotes = allNotes.filter(note =>
      (!this.searchText || note.title.toLowerCase().includes(this.searchText.toLowerCase()) || note.content.toLowerCase().includes(this.searchText.toLowerCase())) &&
      (!this.importanceFilter || note.importance === this.importanceFilter) &&
      (!this.categoryFilter || (note.category && note.category.toLowerCase().includes(this.categoryFilter.toLowerCase()))) &&
      (!this.filterFavoritesOnly || note.favorite)
    );
  }

  onEdit(id: string): void {
    this.router.navigate(['/edit', id]);
  }

  onDelete(id: string): void {
    Swal.fire({
      title: 'Emin misin?',
      text: 'Bu not kalıcı olarak silinecek.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Evet, sil',
      cancelButtonText: 'Vazgeç'
    }).then((result) => {
      if (result.isConfirmed) {
        this.noteService.deleteNote(id);
        this.loadNotes();

        Swal.fire('Silindi!', 'Not başarıyla silindi.', 'success');
      }
    });
  }

  onSearchInput(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
    this.loadNotes();
  }

  onCategoryInput(event: Event): void {
    this.categoryFilter = (event.target as HTMLInputElement).value;
    this.loadNotes();
  }

  onImportanceChange(event: Event): void {
    this.importanceFilter = (event.target as HTMLSelectElement).value;
    this.loadNotes();
  }

  toggleFavorites(): void {
    this.filterFavoritesOnly = !this.filterFavoritesOnly;
    this.loadNotes();
  }

  toggleDarkMode(event: Event): void {
    this.isDarkMode = (event.target as HTMLInputElement).checked;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    localStorage.setItem('dark-mode', this.isDarkMode ? 'enabled' : 'disabled');
  }
}
