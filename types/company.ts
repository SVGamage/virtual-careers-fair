export interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  size: string;
  positions: string[];
  description: string;
  logo: string;
  openPositions: number;
  rating: number;
}

export type CompanySize = 
  | "1-50 employees"
  | "51-200 employees"
  | "201-500 employees"
  | "500-1000 employees"
  | "1000+ employees";

export type Industry = 
  | "Technology"
  | "Finance"
  | "Healthcare"
  | "Energy"
  | string;
