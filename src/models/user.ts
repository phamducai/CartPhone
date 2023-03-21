export interface User {
  id?: number;
  name?: string;
  email?: string;
  dateOfBirth?: Date | any;
  avatar?: string;
  compantAddress?: string;
  companthome?: string;
  sex?: sex | any;
}
enum sex {
  'Male',
  'Female',
  'other',
}
