export default interface Product {
    title: string;
    id: number;
    category: string;
    description: string;
    price: number;
    image: string;
    rating: {
        rate: number;
        count: number
    };
}