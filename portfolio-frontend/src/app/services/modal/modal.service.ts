import {Injectable} from '@angular/core';
import {ModalType} from 'src/app/entities/modalType';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {
  }

  private _type: ModalType = ModalType.HIDDEN;

  public get type(): ModalType {
    return this._type;
  }

  public set type(type: ModalType) {
    this._type = type;
  }
}
