import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TeacherService } from '../core/teacher.service';
import { TeacherModel } from '../core/teacher.model';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { TeacherModalDialogComponent } from '../teacher-modal-dialog/teacher-modal-dialog.component';
import { ConfirmModalDialogComponent } from 'src/app/shared/confirm-modal-dialog/confirm-modal-dialog.component';

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
    private dialog: MatDialog,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.loadTeachers();
  }

  addNewTeacher() {
    this.dialog.open(TeacherModalDialogComponent)
      .afterClosed()
      .subscribe(result => console.log(result));
  }

  updateTeacher(teacher: TeacherModel) {
    this.dialog.open(TeacherModalDialogComponent, {
      data: { teacher }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }

  deleteTeacher(teacher: TeacherModel) {
    this.dialog.open(ConfirmModalDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result && result.confirm) {
          this.alert.warning(`Delete ${teacher.full_name}`);
        }
      });
  }

  private async loadTeachers() {
    this.teachers = await this.teacherService.getAllTeachers();
    this.setDataSource(this.teachers);
  }

  private setDataSource(teachers) {
    this.dataSource = new MatTableDataSource(teachers);
  }

}
