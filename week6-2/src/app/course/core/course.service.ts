import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CourseModel } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  path: string;

  constructor(
    private http: HttpClient
  ) {
    this.path = `${environment.API_URL}courses`;
   }

  getAllCourses(): Observable<any> {
    return this.http.get(this.path);
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get(`${this.path}/${id}`);
  }

  updateCourse(id: number, course: CourseModel): Observable<any> {
    return this.http.put(`${this.path}/${id}`, course);
  }

  createCourse(course: CourseModel) {
    return this.http.post(this.path, course);
  }

  deleteCourse(id: number) {
    return this.http.delete(`${this.path}/${id}`);
  }

}
