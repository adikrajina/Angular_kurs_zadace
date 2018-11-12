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
      .subscribe(
          result => {
            console.log(result);
            if (result && result.success) {
              this.alert.success('Added new teacher');
            }
            this.loadTeachers();
          });
    // this.alert.success('Add new Teacher selected');
  }

  updateTeacher(teacher: TeacherModel) {
    this.dialog.open(TeacherModalDialogComponent, {
      data: { teacher }
    })
      .afterClosed()
      .subscribe(result => {
                  console.log(result);
                  if (result && result.success) {
                    this.alert.success('Teacher updated');
                  }
                  this.loadTeachers();
                }
      );
    this.alert.info(`Update ${teacher.first_name} ${teacher.last_name}`);
  }

  deleteTeacher(teacher: TeacherModel) {
    this.dialog.open(ConfirmModalDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result && result.confirm) {
          this.teacherService.deleteTeacher(teacher.id)
            .subscribe(() => {
              this.alert.info(`Delete ${teacher.first_name} ${teacher.last_name}`);
              this.loadTeachers();
            }
            );
        }
      });
  }

  private async loadTeachers() {
    // this.teachers = await this.teacherService.getAllTeachers();
    this.teacherService.getAllTeachers().subscribe(
      response => {
        this.teachers = response;
        console.log(this.teachers);
        this.setDataSource(this.teachers);
      },
      err => this.alert.error('Unexpected server error')
    );
  }

  private setDataSource(teachers) {
    this.dataSource = new MatTableDataSource(teachers);
  }

}
