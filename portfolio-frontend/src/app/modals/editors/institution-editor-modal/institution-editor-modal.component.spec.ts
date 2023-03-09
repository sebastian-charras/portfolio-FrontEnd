import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InstitutionEditorModalComponent} from './institution-editor-modal.component';

describe('InstitutionEditorModalComponent', () => {
  let component: InstitutionEditorModalComponent;
  let fixture: ComponentFixture<InstitutionEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstitutionEditorModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InstitutionEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
