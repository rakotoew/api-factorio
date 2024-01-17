export interface Item {
    id: number;
    name: string;
    class: string;
    craft: Craft[];
}

export interface Craft {
    id: number;
    name: string;
    time: number;
    ingredients: Ingredient[];
    products: Product[];
}

export interface Ingredient {
    ingredient: Item;
    amount: number;
}

export interface Product {
    product: Item;
    amount: number;
}