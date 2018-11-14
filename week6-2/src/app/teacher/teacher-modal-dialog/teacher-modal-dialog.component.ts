import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TeacherModel } from '../core/teacher.model';
import { TeacherService } from '../core/teacher.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'cm-teacher-modal-dialog',
  templateUrl: './teacher-modal-dialog.component.html',
  styleUrls: ['./teacher-modal-dialog.component.css']
})
export class TeacherModalDialogComponent implements OnInit {

  teacherForm: FormGroup;
  teacher: TeacherModel;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<TeacherModalDialogComponent>,
    private teacherService: TeacherService,
    private alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.teacher = this.data && this.data.teacher ? this.data.teacher : new TeacherModel();
  }

  ngOnInit() {
    this.createTeacherForm();
    this.title = this.teacher.id ? 'Edit Teacher' : 'Add New Teacher';
  }

  submit() {
    if (this.teacherForm.invalid) {
      return;
    }
    this.teacher.id ? this.updateTeacher(this.teacherForm.value) : this.addTeacher();
  }

  private addTeacher() {
    this.teacherService.createTeacher(this.teacherForm.value)
      .subscribe(
        response => this.dialogRef.close({ success: true }),
        err => this.alert.error('Unexpected server error')
      );
  }

  private updateTeacher(value: TeacherModel) {
    this.teacherService.updateTeacher(this.teacher.id, value)
      .subscribe(
        response => this.dialogRef.close({ success: true }),
        err => this.alert.error('Unexpected server error')
      );
  }

  private createTeacherForm() {
    this.teacherForm = new FormGroup({
      first_name: new FormControl(this.teacher.first_name, Validators.required),
      last_name: new FormControl(this.teacher.last_name, Validators.required),
      email: new FormControl(this.teacher.email),
      gender: new FormControl(this.teacher.gender),
      phone_number: new FormControl(this.teacher.phone_number, Validators.required),
      website: new FormControl(this.teacher.website),
      company: new FormControl(this.teacher.company)
    });
  }

}
