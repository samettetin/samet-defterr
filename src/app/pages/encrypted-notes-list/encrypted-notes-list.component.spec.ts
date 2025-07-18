import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptedNotesListComponent } from './encrypted-notes-list.component';

describe('EncryptedNotesListComponent', () => {
  let component: EncryptedNotesListComponent;
  let fixture: ComponentFixture<EncryptedNotesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptedNotesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncryptedNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
