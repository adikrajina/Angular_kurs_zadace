import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../course/core/course.model';
import { CourseService } from '../course/core/course.service';

@Component({
  selector: 'cm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: CourseModel[];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    // this.courses = this.courseService.getAllCourses();
    this.courseService.getAllCourses().subscribe(
      response => {
        this.courses = response;
        console.log(this.courses);
      });
  }

  courseTitleSelected(x) {
    console.log('Emitter info from child component', x);
  }

}
