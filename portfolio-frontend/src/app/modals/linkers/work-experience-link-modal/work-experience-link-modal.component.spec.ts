import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkExperienceLinkModalComponent} from './work-experience-link-modal.component';

describe('WorkExperienceLinkModalComponent', () => {
  let component: WorkExperienceLinkModalComponent;
  let fixture: ComponentFixture<WorkExperienceLinkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperienceLinkModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
