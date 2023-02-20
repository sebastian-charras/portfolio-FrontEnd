export interface Project {
  id: number | null;
  title: string;
  period: string;
  completed: boolean | null;
  description: string | null;
  url: string | null;
}
