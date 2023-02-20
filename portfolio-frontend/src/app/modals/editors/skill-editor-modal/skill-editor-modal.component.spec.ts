import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEditorModalComponent } from './skill-editor-modal.component';

describe('SkillEditorModalComponent', () => {
  let component: SkillEditorModalComponent;
  let fixture: ComponentFixture<SkillEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillEditorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
