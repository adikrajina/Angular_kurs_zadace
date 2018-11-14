import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';
import { TeacherService } from 'src/app/teacher/core/teacher.service';
import { StudentService } from 'src/app/student/core/student.service';
import { TeacherModel } from 'src/app/teacher/core/teacher.model';
import { StudentModel } from 'src/app/student/core/student.model';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'cm-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: CourseModel;
  courseDetailForm: FormGroup;
  teachers: TeacherModel[];
  students: StudentModel[];
  selectedStudents: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.getCourse(id);
    this.getStudents();
    this.getTeachers();
  }

  submit() {
    if (this.courseDetailForm.invalid) {
      return;
    }
    if (this.courseDetailForm.pristine) {
      return;
    }
    this.courseService.updateCourse(this.course.id, this.courseDetailForm.value).subscribe(
      () => this.alert.success(`Updated ${this.course.name}`),
      () => this.alert.error('Error while updating')
    );
  }

  private getCourse(id: number) {
    this.courseService.getCourseById(id).subscribe(response => {
      this.course = response;
      if (this.course.students) {
        this.resolveSelectedStudents(this.course.students);
      }
      this.createCourseForm();
    });
  }

  private getTeachers() {
    this.teacherService.getAllTeachers().subscribe(response => this.teachers = response);
  }

  private getStudents() {
    this.studentService.getAllStudents().subscribe(response => this.students = response);
  }

  private resolveSelectedStudents(value: number[]) {
    setTimeout(() => {
      this.selectedStudents = this.students.filter(student => value.includes(student.id));
    });
  }

  private createCourseForm() {
    this.courseDetailForm = new FormGroup({
      name: new FormControl(this.course.name, Validators.required),
      description: new FormControl(this.course.description),
      location: new FormControl(this.course.location),
      address: new FormControl(this.course.address),
      state: new FormControl(this.course.state),
      start_date: new FormControl(this.course.start_date),
      end_date: new FormControl(this.course.end_date),
      teacher: new FormControl(this.course.teacher),
      students: new FormControl(this.course.students)
    });
    this.courseDetailForm.get('students').valueChanges.subscribe(value => this.resolveSelectedStudents(value));
  }
}
