import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses = [
    {
      id: 1,
      name: 'Angular',
      teacher: 'Nemanja',
      location: 'Sarajevo'
    },
{
      id: 2,
      name: 'React',
      teacher: 'Nemanja',
      location: 'Tuzla'
    },
    {
      id: 3,
      name: 'English',
      teacher: 'Nemanja',
      location: 'Sarajevo'
    },
    {
      id: 4,
      name: 'Math',
      teacher: 'Samir',
      location: 'Banjaluka'
    }
  ];
  constructor() { }

  getAllCourses() {
    return this.courses;
  }
}
