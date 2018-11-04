import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseModel } from '../core/course.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'cm-course-modal-dialog',
  templateUrl: './course-modal-dialog.component.html',
  styleUrls: ['./course-modal-dialog.component.css']
})
export class CourseModalDialogComponent implements OnInit {

  courseForm: FormGroup;
  course: CourseModel;

  constructor(public dialogRef: MatDialogRef<CourseModalDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
    console.log(this.data);
    this.course = this.data ? this.data.course : new CourseModel();
    // if (!this.data) {
    //   this.course = new CourseModel();
    // } else {
    //   this.course = this.data.course;
    // }
  }

  ngOnInit() {
    this.createCourseForm();
  }

  // ngDoCheck(): void {
  //   console.log(this.courseForm);
  // }

  private createCourseForm() {
    this.courseForm = new FormGroup({
      name: new FormControl(this.course.name, Validators.required),
      description: new FormControl(this.course.description),
      location: new FormControl(this.course.location)
    });

  }

}
