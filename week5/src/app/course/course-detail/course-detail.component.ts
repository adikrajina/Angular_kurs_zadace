import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../core/course.service';

@Component({
  selector: 'cm-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.params.id;
    this.getCourse(id);
  }

  private getCourse(id: number) {
    this.courseService.getCourseByid(id);
  }
}
