import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCreateModalComponent } from './skill-creator-modal.component';

describe('SkillCreateModalComponent', () => {
  let component: SkillCreateModalComponent;
  let fixture: ComponentFixture<SkillCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCreateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
