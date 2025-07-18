import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptedNoteComponent } from './encrypted-note.component';

describe('EncryptedNoteComponent', () => {
  let component: EncryptedNoteComponent;
  let fixture: ComponentFixture<EncryptedNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptedNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncryptedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
