import type { DraggableProvided } from 'react-beautiful-dnd';

export interface Order {
    OrderID: number;
    CustomerID: number;
    ProductID: number;
    OrderStatus: string;
}

export interface OrderData {
  Queued: Order[],
  InProgress: Order[],
  QA: Order[],
}

export interface DraggableItemProps extends Order{
    draggableProvided: DraggableProvided;
    removeOrder: (order: Order) => void;
}

export interface DraggableListProps {
    ID: string;
    listTitle: string;
    removeOrder: (order: Order) => void;
    items: Order[];
};

export interface HeaderLink {
    label: string;
    url: string;
}

export interface HeaderProps {
    links: HeaderLink[];
}

export interface Product {
    ProductID: number,
    ProductPhotoURL: string,
    ProductName: string,
    ProductStatus: 'Active' | 'InActive',
}

export interface ProductItemProps {
    product: Product
}

export interface ProductListProps {
    listTitle: string,
    products: Product[]
}

export interface ProductData {
    Active: Product[],
    InActive: Product[],
}
