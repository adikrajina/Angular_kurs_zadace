import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { StudentService } from '../core/student.service';
import { StudentModel } from '../core/student.model';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { StudentModalDialogComponent } from '../student-modal-dialog/student-modal-dialog.component';

@Component({
  selector: 'cm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[];
  title = 'Students';

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'fullName', 'email', 'actions'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG

  constructor(
    private studentService: StudentService,
    private alert: AlertService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadStudents();
  }

  addNewStudent() {
    this.dialog.open(StudentModalDialogComponent)
                .afterClosed()
                .subscribe(result => {console.log('The dialog was closed');
              });
  }

  updateStudent(student: StudentModel) {
    this.dialog.open(StudentModalDialogComponent, {
          hasBackdrop: false,
          data: {student}// u modernom JS, inace moza i ovako data: {student: student}
        })
      .afterClosed()
      .subscribe(result => {console.log('The dialog was closed');
    });
  }

  deleteStudent(student: StudentModel) {
    this.alert.error('Student ' + student.full_name + ' deleted ');
  }
  private async loadStudents() {
    this.students = await this.studentService.getAllStudents();
    this.setDataSource(this.students);
  }

  private setDataSource(students) {
    this.dataSource = new MatTableDataSource(students);
  }

}
