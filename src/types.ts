export type Status = "completed" | "in-progress" | "cancelled" | "not-started";

export enum Difficulty {
  None,
  Trivial,
  Easy,
  Medium,
  Hard,
  Insane,
}

export interface Tech {
  id: string;
  title: string;
  description: string;
  status: Status;
  notes?: string;
  resources: string[];
  dependsOn?: Tech[];
  deadline?: Date;
  category?: string;
  difficulty: Difficulty;
}

export type TechFilters = Partial<Tech>; 
