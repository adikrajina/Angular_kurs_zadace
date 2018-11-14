import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { CourseService } from './course/core/course.service';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseModalDialogComponent } from './course/course-modal-dialog/course-modal-dialog.component';

import { FullLayoutComponent } from './full-layout/full-layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { TruncatePipe } from './shared/truncate.pipe';
import { ConfirmModalDialogComponent } from './shared/confirm-modal-dialog/confirm-modal-dialog.component';

import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentModalDialogComponent } from './student/student-modal-dialog/student-modal-dialog.component';

import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherModalDialogComponent } from './teacher/teacher-modal-dialog/teacher-modal-dialog.component';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    StudentListComponent,
    TeacherListComponent,
    HomeComponent,
    CourseListComponent,
    CourseCardComponent,
    HeaderComponent,
    CourseDetailComponent,
    CourseModalDialogComponent,
    ConfirmModalDialogComponent,
    StudentModalDialogComponent,
    TeacherModalDialogComponent,
    TruncatePipe,
    LoginComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    CourseService
  ],
  entryComponents: [
    CourseModalDialogComponent,
    TeacherModalDialogComponent,
    StudentModalDialogComponent,
    ConfirmModalDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
