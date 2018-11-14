import { Injectable } from '@angular/core';
import { StudentModel } from './student.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  path: string;

  constructor(
    private http: HttpClient
  ) {
    this.path = `${environment.API_URL}students`;
   }

  getAllStudents(): Observable<any> {
    return this.http.get(this.path);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.path}/${id}`);
  }

  createStudent(student: StudentModel) {
    return this.http.post(this.path, student);
  }

  updateStudent(id: number, student: StudentModel ) {
    return this.http.put(`${this.path}/${id}`, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.path}/${id}`);
  }
}
