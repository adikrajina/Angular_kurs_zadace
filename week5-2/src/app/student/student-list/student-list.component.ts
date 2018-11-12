import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { StudentService } from '../core/student.service';
import { StudentModel } from '../core/student.model';
import { StudentModalDialogComponent } from '../student-modal-dialog/student-modal-dialog.component';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { ConfirmModalDialogComponent } from 'src/app/shared/confirm-modal-dialog/confirm-modal-dialog.component';

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
    private dialog: MatDialog,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.loadStudents();
  }

  addNewStudent() {
    this.dialog.open(StudentModalDialogComponent)
      .afterClosed()
      .subscribe(
          result => {
            console.log(result);
            if (result && result.success) {
              this.alert.success('Added new student');
            }
            this.loadStudents();
          });
    // this.alert.success('Add new Student selected');
  }

  updateStudent(student: StudentModel) {
    this.dialog.open(StudentModalDialogComponent, {
      data: { student }
    })
      .afterClosed()
      .subscribe(result => {
                  console.log(result);
                  if (result && result.success) {
                    this.alert.success('Student updated');
                  }
                  this.loadStudents();
                }
      );
    this.alert.info(`Update ${student.first_name} ${student.last_name}`);
  }

  deleteStudent(student: StudentModel) {
    this.dialog.open(ConfirmModalDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result && result.confirm) {
          this.studentService.deleteStudent(student.id)
            .subscribe(() => {
              this.alert.info(`Delete ${student.first_name} ${student.last_name}`);
              this.loadStudents();
            }
            );
        }
      });
  }

  private async loadStudents() {
    // this.students = await this.studentService.getAllStudents();
    this.studentService.getAllStudents().subscribe(
      response => {
        this.students = response;
        console.log(this.students);
        this.setDataSource(this.students);
      },
      err => this.alert.error('Unexpected server error')
    );
  }

  private setDataSource(students) {
    this.dataSource = new MatTableDataSource(students);
  }

}
