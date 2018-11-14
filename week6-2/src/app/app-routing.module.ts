import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from './full-layout/full-layout.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'course',
        component: CourseListComponent,
      },
      {
        path: 'course/:id',
        component: CourseDetailComponent
      },
      {
        path: 'student',
        component: StudentListComponent
      },
      {
        path: 'teacher',
        component: TeacherListComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
 imports: [
   CommonModule,
   RouterModule.forRoot(routes)
 ],
 exports: [
   RouterModule
 ]
})

export class AppRoutingModule {}
