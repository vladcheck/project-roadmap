export type Status = "completed" | "in-progress" | "cancelled" | "not-started";

export type FilterStatus = null | Status;

export interface Tech {
  id: string;
  title: string;
  description: string;
  status: Status;
}
