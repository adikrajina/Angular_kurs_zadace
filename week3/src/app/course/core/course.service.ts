import { Injectable } from '@angular/core';

const COURSES = [
  {
      id: 1,
      name: 'Angular v2+',
      description: 'Angular kurs za pocetnike. Pisemo TypeScript kod, transpajlira se i izvrsava kao JavaScript u browseru',
      location: 'Sarajevo',
  },
  {
      id: 2,
      name: 'AngularJS',
      description: 'AngularJS kurs za pocetnike. Pisemo JavaScript kod, izvrsava se u browseru, EcmaScript 5',
      location: 'Banja Luka',
  },
  {
      id: 3,
      name: 'Engleski jezik',
      description: 'Engleski jezik je jezik koji vam otvara vrata komunikacije sa svijetom.',
      location: 'Mostar',
  },
  {
      id: 4,
      name: 'MS Office',
      description: 'Kurs za sve koji zele da nauce da rade sa Microsoft Office-om',
      location: 'Trebinje',
  }
];

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getAllCourses() {
    return COURSES;
  }

}
