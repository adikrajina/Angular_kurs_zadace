import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentModel } from '../core/student.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentService } from '../core/student.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

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
    private studentService: StudentService,
    private alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.student = this.data && this.data.student ? this.data.student : new StudentModel();
  }

  ngOnInit() {
    this.createStudentForm();
    this.title = this.student.id ? 'Edit Student' : 'Add New Student';
  }

  submit() {
    if (this.studentForm.invalid) {
      return;
    }

    this.student.id ? this.updateStudent(this.studentForm.value) : this.addStudent();
  }

  private addStudent() {
    this.studentService.createStudent(this.studentForm.value)
      .subscribe(
        response => this.dialogRef.close({success: true}),
        err => this.alert.error('Unexpected server error')
      );
  }

  private updateStudent(value: StudentModel) {
    this.studentService.updateStudent(this.student.id, value)
      .subscribe(
        response => this.dialogRef.close({success: true}),
        err => this.alert.error('Unexpected server error')
      );
  }

  private createStudentForm() {
    this.studentForm = new FormGroup({
      first_name: new FormControl(this.student.first_name, Validators.required),
      last_name: new FormControl(this.student.last_name, Validators.required),
      email: new FormControl(this.student.email, [Validators.email, Validators.required]),
      gender: new FormControl(this.student.gender),
      phone_number: new FormControl(this.student.phone_number)
    });

  }

}
