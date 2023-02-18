import { Institution } from './institution';

export interface Education {
  id: number;
  institution: Institution | null;
  title: string;
  period: string;
  completed: boolean | null;
  description: string | null;
}
