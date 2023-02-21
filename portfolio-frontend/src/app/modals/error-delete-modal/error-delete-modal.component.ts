import { Component } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-error-delete-modal',
  templateUrl: './error-delete-modal.component.html',
  styleUrls: ['./error-delete-modal.component.css'],
})
export class ErrorDeleteModalComponent {
  constructor(private modalService: ModalService) {}

  public close(): void {
    this.modalService.type = ModalType.HIDDEN;
  }
}
