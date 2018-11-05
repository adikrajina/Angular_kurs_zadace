import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentModel } from '../core/student.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'cm-student-modal-dialog',
  templateUrl: './student-modal-dialog.component.html',
  styleUrls: ['./student-modal-dialog.component.css']
})
export class StudentModalDialogComponent implements OnInit {

  studentForm: FormGroup;
  student: StudentModel;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<StudentModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.student = this.data && this.data.student ? this.data.student : new StudentModel();
  }

  ngOnInit() {
    this.createStudentForm();
    this.title = this.student.id ? 'Edit Student' : 'Add New Student';
  }

  createStudentForm() {
    this.studentForm = new FormGroup({
      first_name: new FormControl(this.student.first_name, Validators.required),
      last_name: new FormControl(this.student.last_name, Validators.required),
      email: new FormControl(this.student.email, [Validators.email, Validators.required])
    });
  }

}
