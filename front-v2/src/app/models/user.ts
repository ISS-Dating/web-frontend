import {Questions} from './questions';

export interface User {
  id: number;
  photo_url: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  gender: string;
  city: string;
  country: string;
  age: number;
  description: string;
  looking_for: string;
  status: string;
  education: string;
  mood: string;
  banned: boolean;
  role: string;
  stats: {
    id: 1,
    user_id: 1,
    banned_before: false,
    users_met: 0,
    messages_sent: 0,
    average_message_length: 0,
    links_in_messages: 0
  };
  questions: Questions;
  registration_date: string;
  links: [];
}
