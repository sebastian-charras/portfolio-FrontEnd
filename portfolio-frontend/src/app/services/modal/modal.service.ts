import { Injectable } from '@angular/core';
import { ModalType } from 'src/app/entities/modalType';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _type: ModalType = ModalType.HIDDEN;

  constructor() {}

  public get type(): ModalType {
    return this._type;
  }

  public set type(type: ModalType) {
    this._type = type;
  }
}
