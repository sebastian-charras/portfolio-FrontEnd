import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionCreatorModalComponent } from './institution-creator-modal.component';

describe('InstitutionCreatorModalComponent', () => {
  let component: InstitutionCreatorModalComponent;
  let fixture: ComponentFixture<InstitutionCreatorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionCreatorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionCreatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
