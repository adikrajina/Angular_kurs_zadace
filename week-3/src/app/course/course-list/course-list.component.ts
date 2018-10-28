import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CourseModel } from '../core/course.model';
import { CourseService } from '../core/course.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'cm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: CourseModel[];

 // DATA TABLE CONFIG
 displayedColumns: string[] = ['id', 'name', 'location'];
 dataSource: MatTableDataSource<CourseModel>;
 // END DATA TABLE CONFIG

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.loadCourses();
  }
  private async loadCourses() {
    this.courses = await this.courseService.getAllCourses();
    this.setDataSource(this.courses);
  }
  private setDataSource(courses: CourseModel[]) {
    this.dataSource = new MatTableDataSource(courses);
  }

}
