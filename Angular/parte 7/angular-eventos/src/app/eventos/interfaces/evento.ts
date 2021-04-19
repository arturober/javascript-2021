import { User } from '../../auth/interfaces/user';

export interface Evento {
  id?: number;
  name: string;
  image: string;
  date: string;
  description: string;
  price: number;
  creator?: User;
}
