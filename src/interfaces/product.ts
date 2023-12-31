// Generated by https://quicktype.io

import { Category } from "./category";

export interface Product {
    id:          string;
    name:        string;
    slug:        string;
    stock:       string;
    price:       string;
    description: string;
    category:    Category;
    images:      Image[];
}

export interface Image {
    id:  string;
    url: string;
}
