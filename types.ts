
export enum Screen {
  SPLASH = 'splash',
  LOGIN = 'login',
  HOME = 'home',
  DIET = 'diet',
  FOOD_CHECKER = 'food_checker',
  PET_PROFILE = 'pet_profile',
  BREED_EXPLORER = 'breed_explorer',
  BREED_DETAILS = 'breed_details',
  SYMPTOM_CHECKER = 'symptom_checker',
  DIAGNOSIS = 'diagnosis'
}

export interface Pet {
  name: string;
  type: 'Dog' | 'Cat';
  breed: string;
  age: number;
  weight: number;
  gender: 'Male' | 'Female';
  avatar: string;
}

export interface FoodItem {
  name: string;
  description: string;
  isSafe: boolean;
  icon: string;
  severity?: string;
}

export interface Breed {
  id: string;
  name: string;
  type: string;
  tags: string[];
  image: string;
  rating: number;
  reviews: number;
  price: number;
  traits: string[];
  size: string;
  lifespan: string;
  energy: string;
  training: string;
  about: string;
}
