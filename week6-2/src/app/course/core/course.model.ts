export class CourseModel {
  id: number;
  name: string;
  description: string;
  location: string;
  address: string;
  state: string;
  start_date: string;
  end_date: string;
  teacher: number;
  students: number[];
}
