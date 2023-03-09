import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EducationCreatorModalComponent} from './education-creator-modal.component';

describe('EducationCreatorModalComponent', () => {
  let component: EducationCreatorModalComponent;
  let fixture: ComponentFixture<EducationCreatorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationCreatorModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EducationCreatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
