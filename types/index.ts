interface Contact {
  id: string;
  phone: string;
  city: string;
  district: string;
  address: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

interface Price {
  id: string;
  adult: number;
  child: number;
  scrub: number;
  createdAt: string;
  updatedAt: string;
}

interface Day {
  id: string;
  day: string;
  openTime: string;
  closeTime: string;
  sex: number;
  createdAt: string;
  updatedAt: string;
  belongsToId: string;
}

export interface TProperty {
  id: string;
  title: string;
  contactId: string;
  priceId: string;
  vibe: string;
  amenities: string[];
  photos: string[];
  sex: number;
  createdAt: string;
  updatedAt: string;
  contact: Contact;
  price: Price;
  days: Day[];
}

export interface TApiResponse {
  all_items: number;
  page: number;
  max_page: number;
  limit: number;
  data: TProperty[];
}
