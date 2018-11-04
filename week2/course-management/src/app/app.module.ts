import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FullLayoutComponent } from './full-layout/full-layout.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/core/course.service';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherService } from './teacher/core/teacher.service';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/core/student.service';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    CourseComponent,
    TeacherComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    AppRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    CourseService,
    TeacherService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
