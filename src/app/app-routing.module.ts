import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { TrashNotesComponent } from './pages/trash-notes/trash-notes.component';
import { EncryptedNoteComponent } from './pages/encrypted-note/encrypted-note.component';
import { EncryptedNotesListComponent } from './pages/encrypted-notes-list/encrypted-notes-list.component';


const routes: Routes = [
  { path: 'trash', component: TrashNotesComponent, data: { animation: 'TrashPage' } },
  { path: 'encrypted', component: EncryptedNoteComponent },
 { path: 'encrypted', component: EncryptedNoteComponent },
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'create', component: CreateNoteComponent, data: { animation: 'CreatePage' } },
  { path: 'edit/:id', component: CreateNoteComponent, data: { animation: 'EditPage' } },
  { path: '**', redirectTo: '' },
  { path: 'encrypted', redirectTo: '/' },
  { path: 'encrypted-notes', component: EncryptedNotesListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
