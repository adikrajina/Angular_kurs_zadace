import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from '../core/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: CourseModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showCourseInfo(course: CourseModel) {
    this.router.navigate([`course/${course.id}`]);
  }

}
