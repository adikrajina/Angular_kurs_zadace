import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'cm-confirm-modal-dialog',
  templateUrl: './confirm-modal-dialog.component.html',
  styleUrls: ['./confirm-modal-dialog.component.css']
})
export class ConfirmModalDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmModalDialogComponent>,
  ) {
  }

  ngOnInit() {
  }

  confirm() {
    this.dialogRef.close({confirm: true});
  }
}
