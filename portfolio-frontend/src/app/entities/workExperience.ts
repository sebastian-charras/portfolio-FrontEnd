import { Institution } from './institution';

export interface workExperience {
  id: number;
  institution: Institution | null;
  title: string;
  period: string;
  completed: boolean | null;
  description: string | null;
}
