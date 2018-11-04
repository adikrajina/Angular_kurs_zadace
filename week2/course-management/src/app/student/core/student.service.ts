import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    {
      id: 1,
      name: 'Belma',
      course: [
        'Angular',
        'English',
        'Math'
      ]
    },
{
      id: 2,
      name: 'Selma',
      course: [
        'React',
        'English',
      ]
    },
    {
      id: 3,
      name: 'Alma',
      course: [
        'Violin',
        'English',
        'Angular'
      ]
    },
    {
      id: 4,
      name: 'Biljana',
      course: [
        'Angular',
        'English',
        'Math',
        'React'
      ]
    }
  ];
  constructor() { }

  getAllStudents() {
    return this.students;
  }
}
