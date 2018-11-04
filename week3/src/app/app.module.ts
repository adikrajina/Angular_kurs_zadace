import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseService } from './course/core/course.service';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    StudentListComponent,
    TeacherListComponent,
    HomeComponent,
    CourseListComponent,
    CourseCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
