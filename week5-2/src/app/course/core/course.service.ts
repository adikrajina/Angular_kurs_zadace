import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CourseModel } from './course.model';

// const COURSES = [
//   {
//       id: 1,
//       name: 'Angular v2+',
//       description: 'Angular kurs za pocetnike. Pisemo TypeScript kod, transpajlira se i izvrsava kao JavaScript u browseru',
//       location: 'Sarajevo',
//   },
//   {
//       id: 2,
//       name: 'AngularJS',
//       description: 'AngularJS kurs za pocetnike. Pisemo JavaScript kod, izvrsava se u browseru, EcmaScript 5',
//       location: 'Banja Luka',
//   },
//   {
//       id: 3,
//       name: 'Engleski jezik',
//       description: 'Engleski jezik je jezik koji vam otvara vrata komunikacije sa svijetom.',
//       location: 'Mostar',
//   },
//   {
//       id: 45,
//       name: 'MS Office',
//       description: 'Kurs za sve koji zele da nauce da rade sa Microsoft Office-om',
//       location: 'Trebinje',
//   }
// ];

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCourses(): Observable<any> {
    // return COURSES;
    return this.http.get(environment.API_URL + 'courses');
  }

  getCourseById(id: number): Observable<any> {
    // return COURSES.find(course => course.id == id);
    return this.http.get(environment.API_URL + 'courses/' + id);
  }

  createCourse(course: CourseModel) {
    return this.http.post(environment.API_URL + 'courses', course);
  }

  deleteCourse (id: number) {
    return this.http.delete(environment.API_URL +  'courses/' + id);
  }
}
