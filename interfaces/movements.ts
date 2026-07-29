import { StockMovement, ProductId, Quantity } from "./types";
import { inventory } from "./products";

export const movements: StockMovement[] = []

export function registerMovement(
    productId: ProductId,
    quantity: Quantity,
    type: "in" | "out"
    
):void{
    const product = inventory.find((p) => p.id === productId)

  if (!product) {
    console.log(`Producto con id ${productId} no encontrado.`);
    return;
  }

  if (type === "out" && product.stock < quantity) {
    console.log(`Stock insuficiente para ${product.name}.`);
    return;
  }

}




