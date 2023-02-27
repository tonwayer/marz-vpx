import React from 'react';
import { ProductListProps } from '../interfaces';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = (props: ProductListProps) => {
    const { listTitle, products } = props;

    return <div
        className='bg-neutral-500 p-4 w-full'
    >
        <h5
            className='font-bold text-white'
        >
            {listTitle}
        </h5>
        {products.map((product, index) => <ProductItem key={index} product={product} />)}
    </div>
};

export default ProductList;
