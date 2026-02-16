export type CakeCategory = 'Pastel' | 'Cheesecake' | 'Especial';

export interface Cake {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: CakeCategory;
}
