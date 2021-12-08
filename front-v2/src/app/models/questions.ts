import {User} from './user';

export interface Questions {
  id: number;
  user_id: number;
  work_question: string;
  food_question: string;
  travel_question: string;
  biography_question: string;
  main_question: string;
}
