import { Institution } from './institution';

export interface WorkExperience {
  id: number | null;
  institution: Institution | null;
  title: string;
  period: string;
  completed: boolean | null;
  description: string | null;
}
