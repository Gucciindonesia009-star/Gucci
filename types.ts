export interface Product {
  id: number | string;
  name: string;
  price: string;
  benefit: string;
  profit: string;
  imageUrl: string;
}

export interface CollectionItem {
  id: string;
  name: string;
  price: string;
  benefitPercent: string;
  profitAmount: string;
  totalWithdraw?: string;
  imageUrl: string;
}