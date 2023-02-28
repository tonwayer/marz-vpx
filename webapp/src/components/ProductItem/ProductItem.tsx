import React from 'react';
import { Product } from '../interfaces';

const ProductItem = (props: Product) => {
    return <div
        className='bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full'
    >
        <img src={props.ProductPhotoURL} alt={props.ProductPhotoURL} />
        <span>{props.ProductName}</span>
        <span>{props.ProductID}</span>
    </div>
}

export default ProductItem;
