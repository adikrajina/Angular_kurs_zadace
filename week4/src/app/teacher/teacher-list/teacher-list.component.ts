import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TeacherService } from '../core/teacher.service';
import { TeacherModel } from '../core/teacher.model';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { TeacherModalDialogComponent } from '../teacher-modal-dialog/teacher-modal-dialog.component';

@Component({
  selector: 'cm-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: TeacherModel[];
  title = 'Teachers';

  // DATA TABLE CONFIG
  displayedColumns: string[] = ['id', 'fullName', 'actions'];
  dataSource: MatTableDataSource<any>;
  // END DATA TABLE CONFIG

  constructor(
    private teacherService: TeacherService,
    private alert: AlertService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadTeachers();
  }

  addNewTeacher() {
    this.dialog.open(TeacherModalDialogComponent)
                .afterClosed()
                .subscribe(result => {console.log('The dialog was closed');
              });
  }

  updateTeacher(teacher: TeacherModel) {
    this.dialog.open(TeacherModalDialogComponent, {
          hasBackdrop: false,
          data: {teacher}// u modernom JS, inace moza i ovako data: {teacher: teacher}
        })
      .afterClosed()
      .subscribe(result => {console.log('The dialog was closed');
    });
  }

  deleteTeacher(teacher: TeacherModel) {
    this.alert.error('Teacher ' + teacher.full_name + ' deleted ');
  }

  private async loadTeachers() {
    this.teachers = await this.teacherService.getAllTeachers();
    this.setDataSource(this.teachers);
  }

  private setDataSource(teachers) {
    this.dataSource = new MatTableDataSource(teachers);
  }

}
