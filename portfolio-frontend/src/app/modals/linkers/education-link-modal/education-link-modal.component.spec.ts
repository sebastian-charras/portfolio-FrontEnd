import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLinkModalComponent } from './education-link-modal.component';

describe('EducationLinkModalComponent', () => {
  let component: EducationLinkModalComponent;
  let fixture: ComponentFixture<EducationLinkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationLinkModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
