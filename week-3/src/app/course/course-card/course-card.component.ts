import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CourseModel } from '../core/course.model';

@Component({
  selector: 'cm-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, OnDestroy {

  @Input () course: CourseModel;

  @Output() titleClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // console.log(this.course)
  }

  titleClickedEvent() {
    this.titleClicked.emit(this.course.name);
  }

  showCourseInfo() {
    console.log('selected id', this.course.id);

  }

  ngOnDestroy() {
    console.log('Kraj jedne componente');
    this.titleClicked.unsubscribe();
  }

}
