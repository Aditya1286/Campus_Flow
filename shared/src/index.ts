export type UserRole = "owner" | "admin" | "member";
export type ProjectMode = "hackathon" | "capstone" | "assignment";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface ProjectSummary {
  id: string;
  name: string;
  mode: ProjectMode;
  progress: number;
  members: number;
}
