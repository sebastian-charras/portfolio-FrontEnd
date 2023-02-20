import { Component } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css'],
})
export class ModalContainerComponent {
  readonly ModalType = ModalType;
  constructor(private modalService: ModalService) {}

  public get type(): ModalType {
    return this.modalService.type;
  }
}
