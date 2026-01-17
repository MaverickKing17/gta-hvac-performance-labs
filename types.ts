export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export enum GenerationType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE'
}

export interface GeneratedContent {
  type: GenerationType;
  content: string; // Text or Base64 Image
}

export interface AppState {
  headline: string;
  subheadline: string;
  heroImage: string | null; // URL or Base64
}