export interface ExampleIssue {
  url: string;
  repo: string;
  comments: number;
}

export type SeverityLevel = "High" | "Medium" | "Low";

export interface Problem {
  id: number;
  title: string;
  mentions: number;
  category: string;
  language: string;
  severity: SeverityLevel;
  description: string;
  whyItMatters: string;
  exampleIssues: ExampleIssue[];
  tags: string[];
  lastUpdated: string;
}

export interface FilterState {
  search: string;
  category: string;
  language: string;
  severity: string;
  sortBy: "mentions" | "recent" | "severity";
}