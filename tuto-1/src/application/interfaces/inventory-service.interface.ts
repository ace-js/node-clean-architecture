export interface IInventoryService {
  notifySaleOcurred(productId: number, quantity: number): void
}