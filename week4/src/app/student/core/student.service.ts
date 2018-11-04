import { Injectable } from '@angular/core';

const STUDENTS = [
  {
    id: 1,
    first_name: 'Nemanja',
    last_name: 'Nemanjic',
    full_name: 'Nemanja Nemanjic',
    email: 'nemanja@test.biz'
  },
  {
    id: 2,
    first_name: 'Mehrudin',
    last_name: 'Memedovic',
    full_name: 'Mehrudin Memedovic',
    email: 'mehrudin@test.biz'
  },
  {
    id: 3,
    first_name: 'Almedin',
    last_name: 'Almedinovic',
    full_name: 'Almedin Almedinovic',
    email: 'almedin@test.biz'
  },
  {
    id: 4,
    first_name: 'Pero',
    last_name: 'Peric',
    full_name: 'Pero Peric',
    email: 'pero@test.biz'
  },
];

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getAllStudents() {
    return STUDENTS;
  }
}
