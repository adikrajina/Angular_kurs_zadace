import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentModel } from '../core/student.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'cm-student-modal-dialog',
  templateUrl: './student-modal-dialog.component.html',
  styleUrls: ['./student-modal-dialog.component.css']
})
export class StudentModalDialogComponent implements OnInit {

  studentForm: FormGroup;
  student: StudentModel;

  constructor(public dialogRef: MatDialogRef<StudentModalDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
    console.log(this.data);
    this.student = this.data ? this.data.student : new StudentModel();
    // if (!this.data) {
    //   this.student = new StudentModel();
    // } else {
    //   this.student = this.data.student;
    // }
  }

  ngOnInit() {
    this.createStudentForm();
  }

  // ngDoCheck(): void {
  //   console.log(this.StudentForm);
  // }

  private createStudentForm() {
    this.studentForm = new FormGroup({
      first_name: new FormControl(this.student.first_name, Validators.required),
      last_name: new FormControl(this.student.last_name),
      full_name: new FormControl(this.student.full_name),
      email: new FormControl(this.student.email)
    });

  }

}
