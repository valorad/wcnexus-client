import { Component, Input, OnInit } from '@angular/core';
import MicroModal from 'micromodal';
import { v4 as uuid } from 'uuid';

import { IDialogProps } from 'src/app/models/interfaces/dialog.interface';

@Component({
  selector: 'home-dialog-slot',
  templateUrl: './dialog-slot.component.html',
  styleUrls: ['./dialog-slot.component.scss']
})
export class DialogSlotComponent implements OnInit {

  dialogID = "";

  private _dialogProps: Partial<IDialogProps> = {};
  public get value(): Partial<IDialogProps> {
    return this._dialogProps;
  }

  @Input()
  public set DialogProps(v: Partial<IDialogProps>) {
    this._dialogProps = v;
    this.dialogID = `dialog-${v.id || uuid()}`;
  }

  constructor() { }

  ngOnInit(): void {
    MicroModal.init();
  }

}
