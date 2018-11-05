import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TeacherModel } from '../core/teacher.model';

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
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.teacher = this.data && this.data.teacher ? this.data.teacher : new TeacherModel();
  }

  ngOnInit() {
    this.createTeacherForm();
    this.title = this.teacher.id ? 'Edit Teacher' : 'Add New Teacher';
  }

  createTeacherForm() {
    this.teacherForm = new FormGroup({
      first_name: new FormControl(this.teacher.first_name, Validators.required),
      last_name: new FormControl(this.teacher.last_name, Validators.required),
    });
  }

}
