import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TrashNotesComponent } from './pages/trash-notes/trash-notes.component';
import { EncryptedNoteComponent } from './pages/encrypted-note/encrypted-note.component';
import { EncryptedNotesListComponent } from './pages/encrypted-notes-list/encrypted-notes-list.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SplashScreenComponent,
    AppComponent,
    HomeComponent,
    CreateNoteComponent,
    NoteFormComponent,
    NoteCardComponent,
    TrashNotesComponent,
    EncryptedNoteComponent,
    EncryptedNotesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
