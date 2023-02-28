import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductItem from './ProductItem';

export default {
    title: 'ProductItem',
    component: ProductItem,
} as ComponentMeta<typeof ProductItem>

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />

const getArgs = (status: 'Active' | 'InActive') => ({
    id: 0,
    name: 'Fake Name',
    photoURL: '/fake-url',
    status,
});

export const activeProductItem = Template.bind({});
activeProductItem.args = getArgs('Active');

export const inActiveProductItem = Template.bind({});
inActiveProductItem.args = getArgs('InActive');
