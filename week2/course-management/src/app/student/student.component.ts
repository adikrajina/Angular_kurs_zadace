import { Component, OnInit } from '@angular/core';
import { StudentService } from './core/student.service';

@Component({
  selector: 'cm-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<any>;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.students = this.studentService.getAllStudents();
  }

}
