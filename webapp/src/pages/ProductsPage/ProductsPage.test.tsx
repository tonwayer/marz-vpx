import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import { rest } from "msw";
import { setupServer } from "msw/node";
import { expectErrorContainer, expectLoadingSpinner, expectProductsContainer } from './ProductsPage.test-Utils';
import { ALL_PRODUCTS } from '../ApiHelper';

describe('ProductsPage', () => {
    const renderPage = () => render(
        <MemoryRouter>
            <ProductsPage />
        </MemoryRouter>
    );
    const setupProductsServer = (response: any, statusCode: number) => setupServer(
        rest.get(ALL_PRODUCTS, (req, res, ctx) => {
            return res(ctx.status(statusCode), ctx.json(response));
        })
    );

    it('should display loading spinner', () => {
        renderPage();
        expectLoadingSpinner();
    });

    it('should display error message', async () => {
        const response = {
            data: [],
            message: "Error"
        };
        const server = setupProductsServer(response, 500);
        server.listen();
        renderPage();

        await waitFor(() => {
            expectErrorContainer();
        });
        server.close();
    });

    it('should display products', async () => {
        const response = {
            data: [
                {
                    ProductID: 1,
                    ProductPhotoURL: '/fake-url',
                    ProductName: 'Fake Product',
                    ProductStatus: 'Active',
                },
            ],
            message: ""
        };
        const server = setupProductsServer(response, 200);
        server.listen();
        renderPage();
        await waitFor(() => {
            expectProductsContainer();
        });
        server.close();
    });
});
