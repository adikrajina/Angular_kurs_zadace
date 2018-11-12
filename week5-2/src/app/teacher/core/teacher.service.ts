import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeacherModel } from './teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTeachers(): Observable<any> {
    // return Teachers;
    return this.http.get(environment.API_URL + 'teachers');
  }

  getTeacherById(id: number): Observable<any> {
    // return Teachers.find(teacher => teacher.id == id);
    return this.http.get(environment.API_URL + 'teachers/' + id);
  }

  createTeacher(teacher: TeacherModel) {
    return this.http.post(environment.API_URL + 'teachers', teacher);
  }

  deleteTeacher (id: number) {
    return this.http.delete(environment.API_URL +  'teachers/' + id);
  }

  updateTeacher(teacher: TeacherModel, id: number) {
    return this.http.put(environment.API_URL + 'teachers/' + id, teacher);
  }
}
