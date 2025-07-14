export default interface Product {
    title: string;
    id: number;
    category: string;
    description: string;
    price: number;
    image: string;
    rating: Rating;
  }
  
  interface Rating {
    rate: number;
    count: number
  }
  