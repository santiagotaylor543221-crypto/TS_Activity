export type ProductId = number;
export type SupplierId = number;
export type InventoryId = number;
export type ProductName = string;
export type SKU = string;
export type Quantity = number;
export type Price = number;

export type ProductCategory =
  | "technology"
  | "clothing"
  | "food"
  | "home";

export type ProductStatus =
  | "active"
  | "inactive"
  | "discontinued";

export interface Supplier {
  id: SupplierId;
  name: ProductName;
  contact_email: string;
  phone?: string;
  state: boolean;
}

export interface Product {
  readonly id: ProductId;
  name: ProductName;
  sku: SKU;
  category: ProductCategory;
  price: Price;
  stock: Quantity;
  minStock: Quantity;
  supplierId: SupplierId;
  status: ProductStatus;
}

export type StockMovement = [ProductId, Quantity, "in" | "out", string]
export type NewProduct = Omit<Product, "id">;
export type ProductUpdate = Partial<Omit<Product, "id">>;