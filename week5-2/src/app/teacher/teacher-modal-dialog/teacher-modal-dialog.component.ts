import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TeacherModel } from '../core/teacher.model';
import { TeacherService } from '../core/teacher.service';

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
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.teacher = this.data && this.data.teacher ? this.data.teacher : new TeacherModel();
  }

  ngOnInit() {
    this.createTeacherForm();
    this.title = this.teacher.id ? 'Edit Teacher' : 'Add New Teacher';
  }

  submit() {
    // iako ima disabled dugme, to je front end koji je hakable
    if (this.teacherForm.invalid) {
      return;
    }
    if (this.teacher.id) {
      this.teacherService.updateTeacher(this.teacherForm.value, this.teacher.id).subscribe(
        response => {
          console.log(response);
          if (response) {
            this.dialogRef.close({success: true});
          }
        });
    } else {
      this.teacherService.createTeacher(this.teacherForm.value).subscribe(
        response => {
          console.log(response);
          if (response) {
            this.dialogRef.close({success: true});
          }
        });
    }
  }

  createTeacherForm() {
    this.teacherForm = new FormGroup({
      first_name: new FormControl(this.teacher.first_name, Validators.required),
      last_name: new FormControl(this.teacher.last_name, Validators.required),
    });
  }

}
