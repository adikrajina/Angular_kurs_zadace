import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TeacherModel } from './teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  path: string;

  constructor(
    private http: HttpClient
  ) {
    this.path = `${environment.API_URL}teachers`;
   }

  getAllTeachers(): Observable<any> {
    return this.http.get(this.path);
  }

  getTeacherById(id: number): Observable<any> {
    return this.http.get(`${this.path}/${id}`);
  }

  createTeacher(teacher: TeacherModel) {
    return this.http.post(this.path, teacher);
  }

  updateTeacher(id: number, teacher: TeacherModel) {
    return this.http.put(`${this.path}/${id}`, teacher);
  }

  deleteTeacher(id: number) {
    return this.http.delete(`${this.path}/${id}`);
  }
}
