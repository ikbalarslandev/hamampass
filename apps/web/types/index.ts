export interface TContact {
  id: string;
  phone: string;
  city: string;
  district: string;
  map_link: string;
  address: string;
  location: number[];
  createdAt: string;
  updatedAt: string;
}

export interface TProduct {
  id: string;
  // necessary
  type: number;
  adult_price: number;
  child_price: number;

  // optional
  age: number;
  detail_tr: string[];
  detail_en: string[];
  desc_tr: string;
  desc_en: string;

  [key: string]: any;
}

export interface TBooking {
  id: string;
  userId: string;
  propertyId: string;
  user: TUser;
  products: JSON;
  property: TProperty;
  review: TReview;
  date: string;
  totalMoney: number;
}

export interface THour {
  sex: number;
  weekdays: string[];
  weekends: string[];
  segregated_details: {
    mens: {
      weekdays: string[];
      weekends: string[];
    };
    womens: {
      weekdays: string[];
      weekends: string[];
    };
  };
}

export interface TProperty {
  id: string;
  title: string;
  contactId: string;
  hourId: string;
  amenityId: string;
  photos: string[];
  sex: number;
  outsider_sex: {
    sex: number;
    day: string;
  }[];
  pay: number;
  createdAt: string;
  updatedAt: string;
  contact: TContact;
  products: TProduct[];
  amenity: TAmenity;
  rating: TRating;
  hour: THour;
  desc_tr: string;
  desc_en: string;
  [key: string]: any;
}

export interface TAmenity {
  id: number;
  items: number[];
  facilities: number[];
  foods_drinks: number[];
}

export interface TApiResponse {
  all_items: number;
  page: number;
  max_page: number;
  limit: number;
  data: TProperty[];
}

export interface TRating {
  id: string;
  count: number;
  rate_overall: number;

  rate_location: number;
  rate_staff: number;
  rate_atmosphere: number;
  rate_cleanliness: number;
  rate_facilities: number;
  rate_value_for_money: number;
}

export interface TReview {
  id: string;
  rateObj: {
    location: number;
    staff: number;
    atmosphere: number;
    cleanliness: number;
    facilities: number;
    value_for_money: number;
  };
  rate: number;
  comment: string;

  bookingId: string;
  booking: TBooking;

  createdAt: string;
  updatedAt: string;
}
export interface TSessionUser {
  name: string;
  email: string;
  image: string;
}

export interface TUser {
  id: string;
  name: string;
  email: string;
  image: string;
  nationality: string;
  age_range: number;
  gender: number;
  reviews: TReview[];
  createdAt: string;
  updatedAt: string;
}

export interface TCountry {
  tld: string;
  name_en: string;
  name_tr: string;
  image: string;
  [key: string]: any;
}
