import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionContainerComponent } from './institution-container.component';

describe('InstitutionContainerComponent', () => {
  let component: InstitutionContainerComponent;
  let fixture: ComponentFixture<InstitutionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
