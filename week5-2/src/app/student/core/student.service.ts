import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }


  getAllStudents(): Observable<any> {
    // return Students;
    return this.http.get(environment.API_URL + 'students');
  }

  getStudentById(id: number): Observable<any> {
    // return Students.find(student => student.id == id);
    return this.http.get(environment.API_URL + 'students/' + id);
  }

  createStudent(student: StudentModel) {
    return this.http.post(environment.API_URL + 'students', student);
  }

  deleteStudent (id: number) {
    return this.http.delete(environment.API_URL +  'students/' + id);
  }

  updateStudent(student: StudentModel, id: number) {
    return this.http.put(environment.API_URL + 'students/' + id, student);
  }
}
