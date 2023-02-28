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
const getArgs = (status: 'Active' | 'InActive') => ({
    listTitle: status,
    products: [
        {
            id: 0,
            name: 'Product0',
            photoURL: 'https://picsum.photos/100/40',
            status,
        },
        {
            id: 1,
            name: 'Product1',
            photoURL: 'https://picsum.photos/100/40',
            status,
        },
    ]
});

export const Active = Template.bind({});
Active.args = getArgs('Active');

export const InActive = Template.bind({});
InActive.args = getArgs('InActive');
