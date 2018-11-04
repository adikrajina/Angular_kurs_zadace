import { Component, OnInit } from '@angular/core';
import { CourseService } from './core/course.service';

@Component({
  selector: 'cm-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Array<any>;

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courses = this.courseService.getAllCourses();
  }

}
