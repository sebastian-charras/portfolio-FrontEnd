import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorDeleteModalComponent} from './error-delete-modal.component';

describe('ErrorDeleteModalComponent', () => {
  let component: ErrorDeleteModalComponent;
  let fixture: ComponentFixture<ErrorDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorDeleteModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
