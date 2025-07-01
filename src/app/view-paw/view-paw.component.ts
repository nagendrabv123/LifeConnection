import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-paw',
  templateUrl: './view-paw.component.html',
  styleUrls: ['./view-paw.component.scss']
})
export class ViewPawComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public selectedPaw: any, private dialogRef: MatDialogRef<ViewPawComponent>) {
   }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
