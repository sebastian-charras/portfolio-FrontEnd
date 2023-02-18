export interface Project {
  id: number;
  title: string;
  period: string;
  completed: boolean | null;
  description: string | null;
  url: string | null;
}
