import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import { ALL_PRODUCTS } from '../ApiHelper';

export default {
    title: 'Product Page',
    component: ProductsPage,
    decorators: [(Story) => (<MemoryRouter><Story /></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: ALL_PRODUCTS,
            method: 'GET',
            status: 200,
            response: {
                data: [
                    {
                        ProductID: 0,
                        ProductPhotoURL: 'https://picsum.photos/100/40',
                        ProductName: 'Fake Product0',
                        ProductStatus: 'Active',
                    },
                    {
                        ProductID: 1,
                        ProductPhotoURL: 'https://picsum.photos/100/40',
                        ProductName: 'Fake Product1',
                        ProductStatus: 'Active',
                    },
                    {
                        ProductID: 2,
                        ProductPhotoURL: 'https://picsum.photos/100/40',
                        ProductName: 'Fake Product2',
                        ProductStatus: 'InActive',
                    },
                ],
                message: ""
            },
        }
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: ALL_PRODUCTS,
            method: 'GET',
            status: 200,
            response: {
                data: [],
                message: ""
            },
        }
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: ALL_PRODUCTS,
            method: 'GET',
            status: 500,
            response: {
                data: [],
                message: "Error"
            }
        }
    ],
};
