import { api } from "./products/api";
import { API_URLS } from "./endpoints";
import type Product from "./products/types";

export const getAllProducts = async () => {
    try {
        const res = await api.get<Product[]>(API_URLS.getProduductList())
        return res.data
    } catch (err) {
        console.error("Failed to fetch users:", err);
    }
}

export const getProductById = async (id: number) => {
    try {
        const res = await api.get<Product>(API_URLS.getProductByID(id))
        return res.data
    } catch (err) {
        console.error("Failed to fetch users:", err);
    }
}