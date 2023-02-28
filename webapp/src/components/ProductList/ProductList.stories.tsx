import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductList from './ProductList';

export default {
    title: 'ProductList',
    component: ProductList,
} as ComponentMeta<typeof ProductList>
const Template: ComponentStory<typeof ProductList> = (args) => (
    <ProductList {...args} />
);

const getArgs = (ProductStatus: 'Active' | 'InActive') => ({
    listTitle: ProductStatus,
    products: [
        {
            ProductID: 0,
            ProductName: 'Product1',
            ProductPhotoURL: 'https://picsum.photos/100/40',
            ProductStatus,
        },
        {
            ProductID: 1,
            ProductName: 'Product2',
            ProductPhotoURL: 'https://picsum.photos/100/40',
            ProductStatus,
        },
    ]
});

export const Active = Template.bind({});
Active.args = getArgs('Active');

export const InActive = Template.bind({});
InActive.args = getArgs('InActive');
