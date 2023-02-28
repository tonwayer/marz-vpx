import React from "react";
import { Product } from "../../components/interfaces";
import ProductList from "../../components/ProductList/ProductList";
import PageWrapper from '../PageWrapper';

const activeProducts: Product[] = [
  {
    id: 0,
    name: 'Product0',
    photoURL: 'https://picsum.photos/100/40',
    status: 'Active',
  },
  {
    id: 1,
    name: 'Product1',
    photoURL: 'https://picsum.photos/100/40',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Product2',
    photoURL: 'https://picsum.photos/100/40',
    status: 'Active',
  },
];

const inActiveProducts: Product[] = [
  {
    id: 3,
    name: 'Product3',
    photoURL: 'https://picsum.photos/100/40',
    status: 'InActive',
  },
  {
    id: 4,
    name: 'Product4',
    photoURL: 'https://picsum.photos/100/40',
    status: 'InActive',
  },
];

const ProductsPage = () => {
  return (
    <PageWrapper>
      <div
        className="flex flex-row justify-center w-full pt-4"
      >
        <ProductList listTitle="Active" products={activeProducts} />
        <ProductList listTitle="InActive" products={inActiveProducts} />
      </div>
    </PageWrapper>
  );
};

export default ProductsPage
