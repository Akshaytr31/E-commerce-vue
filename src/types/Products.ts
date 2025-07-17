import type Rating from "./Rating";

export default interface Products {
    title: string;
    id: number;
    category: string;
    description: string;
    price: number;
    image: string;
    rating: Rating;
}