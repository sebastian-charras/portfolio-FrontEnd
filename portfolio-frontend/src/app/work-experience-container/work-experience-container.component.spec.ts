import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceContainerComponent } from './work-experience-container.component';

describe('WorkExperienceContainerComponent', () => {
  let component: WorkExperienceContainerComponent;
  let fixture: ComponentFixture<WorkExperienceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
