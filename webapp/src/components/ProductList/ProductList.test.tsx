import { render, screen } from "@testing-library/react"
import { Product, ProductListProps } from "../interfaces"
import ProductList from "./ProductList"

describe('ProductList', () => {
    const products: Product[] = [
        {
            ProductID: 0,
            ProductName: 'Fake Product0',
            ProductPhotoURL: '/fake-url0',
            ProductStatus: 'Active',
        },
        {
            ProductID: 1,
            ProductName: 'Fake Product1',
            ProductPhotoURL: '/fake-url1',
            ProductStatus: 'InActive',
        },
    ]
    const props: ProductListProps = {
        listTitle: 'Fake List',
        products,
    }

    const renderList = () => render(<ProductList {...props} />);

    it('renders ProductList correctly', () => {
        renderList();
        screen.getByRole('heading', { name: 'Fake List' });
        products.forEach(product => {
            screen.getByText(product.ProductName);
            screen.getByAltText(product.ProductPhotoURL);
            screen.getByText(product.ProductID);
        })
    });
});
