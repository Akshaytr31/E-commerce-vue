import API_URLS from "@/api/endpoint";
import api from "./api";

export const getAllProducts = async () => {
    try {
        const res = await api.get(API_URLS.productList())
        return res.data
    } catch (err) {
        console.error("Failed to fetch users:", err);
    }
}

export const getProductById = async (id: number) => {
    try {
        const res = await api.get(API_URLS.product(id))
        return res.data
    } catch (err) {
        console.error("Failed to fetch users:", err);
    }
}