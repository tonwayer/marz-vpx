import React from 'react';
import { Product } from '../interfaces';

const ProductItem = (props: Product) => {
    return <div
        className='bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full'
    >
        <img src={props.photoURL} alt={props.photoURL} />
        <span>{props.name}</span>
        <span>{props.id}</span>
    </div>
}

export default ProductItem;
