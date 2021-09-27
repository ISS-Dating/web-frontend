export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  gender: number; // 0 - male, 1 - female
  country: string;
  city: string;
  age: number;
  description: string;
  lookingFor: number; // 0 - male, 1 - female, 2- both
  status: string; // free, married, etc...
  education: string;
  mood: number; // 0- sad, 1- normal, 2- happy. It will be useful for neural network for example. We can pick up people with same mood.
}
