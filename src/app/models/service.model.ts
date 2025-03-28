export interface Service {
    name: string;
    imageUrl: string;
    description: string;
    tone?: string; // Optional field for extra info (e.g., "Used by 50+ clients")
  }