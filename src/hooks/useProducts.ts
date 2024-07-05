import React, {useState, useEffect} from "react";
import axios from "axios";
import { IProduct } from "../models";

export const URL = 'https://fakestoreapi.com/products?limit=5';

type Products = {
    products: IProduct[]
    isLoading: boolean
}

export const useProducts = (URL: string): Products => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const {data} = await axios.get<IProduct[]>(URL);
                setProducts(data);
                setIsLoading(false)                    
            } catch (e) {
                console.log(e)                   
            }
            
        };
        fetchProducts()
    }, [])

    return {products, isLoading}
}


