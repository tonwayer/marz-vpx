import React from 'react';
import { ProductItemProps } from '../interfaces';

const ProductItem = (props: ProductItemProps) => {
    const { product } = props;

    return <div
        className='bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full'
    >
        <div><span>Id:</span><span>{product.id}</span></div>
        <div><span>Name:</span><span>{product.name}</span></div>
        <div><span>Photo:</span><span>{product.photoURL}</span></div>
        <div><span>Status:</span><span>{product.status}</span></div>
    </div>
}

export default ProductItem;
