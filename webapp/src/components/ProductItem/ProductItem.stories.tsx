import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductItem from './ProductItem';
import { Product } from '../interfaces';

export default {
    title: 'ProductItem',
    component: ProductItem,
} as ComponentMeta<typeof ProductItem>

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />

const getArgs = (ProductStatus: 'Active' | 'InActive'): Product => ({
    ProductID: 0,
    ProductName: 'Fake Name',
    ProductPhotoURL: '/fake-url',
    ProductStatus,
});

export const activeProductItem = Template.bind({});
activeProductItem.args = getArgs('Active');

export const inActiveProductItem = Template.bind({});
inActiveProductItem.args = getArgs('InActive');
