import { Product } from "./types";
export const inventory: Product[] = [];

// Technology
export const laptop: Product = {
  id: 1,
  name: "Laptop ThinkPad",
  sku: "TECH-01",
  category: "technology",
  price: 9999,
  stock: 100,
  minStock: 10,
  supplierId: 1, 
  status: "active",
};
inventory.push(laptop);

export const phone: Product = {
  id: 2,
  name: "Samsung S25",
  sku: "TECH-02",
  category: "technology",
  price: 999,
  stock: 100,
  minStock: 10,
  supplierId: 2,
  status: "active",
};
inventory.push(phone);

export const headphones: Product = {
  id: 3,
  name: "Razer Barracuda X",
  sku: "TECH-03",
  category: "technology",
  price: 199,
  stock: 80,
  minStock: 15,
  supplierId: 3, 
  status: "active",
};
inventory.push(headphones);

// Clothing--------------------------------------------------------------------
export const shirt: Product = {
  id: 4,
  name: "Camisa Casual Koaj",
  sku: "CLOTH-01",
  category: "clothing",
  price: 49,
  stock: 150,
  minStock: 20,
  supplierId: 4, 
  status: "active",
};
inventory.push(shirt);

export const jacket: Product = {
  id: 5,
  name: "Chaqueta Elegante Zara",
  sku: "CLOTH-02",
  category: "clothing",
  price: 120,
  stock: 60,
  minStock: 10,
  supplierId: 5, 
  status: "active",
};
inventory.push(jacket);

export const jeans: Product = {
  id: 6,
  name: "Pantalón Jean Dynamo",
  sku: "CLOTH-03",
  category: "clothing",
  price: 65,
  stock: 110,
  minStock: 15,
  supplierId: 6, 
  status: "active",
};
inventory.push(jeans);

// Food--------------------------------------------------------------------
export const milk: Product = {
  id: 7,
  name: "Leche Entera Colanta 1L",
  sku: "FOOD-01",
  category: "food",
  price: 2,
  stock: 500,
  minStock: 50,
  supplierId: 7, 
  status: "active",
};
inventory.push(milk);

export const rice: Product = {
  id: 8,
  name: "Arroz Diana 1Kg",
  sku: "FOOD-02",
  category: "food",
  price: 3,
  stock: 400,
  minStock: 40,
  supplierId: 8, 
  status: "active",
};
inventory.push(rice);

export const pasta: Product = {
  id: 9,
  name: "Pastas Fruco Spaghetti 500g",
  sku: "FOOD-03",
  category: "food",
  price: 2,
  stock: 350,
  minStock: 30,
  supplierId: 9, 
  status: "active",
};
inventory.push(pasta);

// Home--------------------------------------------------------------------
export const glassSet: Product = {
  id: 10,
  name: "Set de Vasos Cristar x6",
  sku: "HOME-01",
  category: "home",
  price: 25,
  stock: 200,
  minStock: 25,
  supplierId: 10, 
  status: "active",
};
inventory.push(glassSet);

export const microwave: Product = {
  id: 11,
  name: "Horno Microondas Mabe",
  sku: "HOME-02",
  category: "home",
  price: 180,
  stock: 45,
  minStock: 5,
  supplierId: 11, 
  status: "active",
};
inventory.push(microwave);

export const beddingSet: Product = {
  id: 12,
  name: "Juego de Sábanas Doble Hogar Innovar",
  sku: "HOME-03",
  category: "home",
  price: 75,
  stock: 90,
  minStock: 12,
  supplierId: 12, 
  status: "active",
};
inventory.push(beddingSet);