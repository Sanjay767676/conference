export interface ConferenceTrack {
  id: string;
  title: string;
  description: string;
  iconName: string; // To match Lucide icons dynamically
  details: string[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  isCompleted?: boolean;
}

export interface PricingTier {
  id: string;
  title: string;
  category: 'author' | 'attendee';
  audience: string;
  priceInternational: string;
  priceNational: string;
  features: string[];
}

export interface RegistrationFormData {
  name: string;
  email: string;
  institution: string;
  country: string;
  designation: 'student' | 'academic' | 'industry';
  category: 'author' | 'attendee';
  region: 'international' | 'national';
  trackId?: string;
  paperTitle?: string;
  paperAbstract?: string;
  agreeToTerms: boolean;
}
