import { Injectable } from '@angular/core';

const TEACHERS = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    full_name: 'John Doe'
  },
  {
    id: 2,
    first_name: 'Nermin',
    last_name: 'Podrug',
    full_name: 'Nermin Podrug'
  },
  {
    id: 3,
    first_name: 'Nikola',
    last_name: 'Simanic',
    full_name: 'Nikola Simanic'
  }
];

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getAllTeachers() {
    return TEACHERS;
  }
}
