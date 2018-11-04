import { Component, OnInit } from '@angular/core';
import { TeacherService } from './core/teacher.service';

@Component({
  selector: 'cm-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Array<any>;

  constructor(
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.teachers = this.teacherService.getAllTeachers();
  }

}
