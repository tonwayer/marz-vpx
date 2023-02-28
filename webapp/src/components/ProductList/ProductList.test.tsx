import { render, screen } from "@testing-library/react"
import { Product, ProductListProps } from "../interfaces"
import ProductList from "./ProductList"

describe('ProductList', () => {
    const products: Product[] = [{
        id: 0,
        name: 'Fake Product0',
        photoURL: '/fake-url0',
        status: 'Active'
    },
    {
        id: 1,
        name: 'Fake Product1',
        photoURL: '/fake-url1',
        status: 'InActive'
    },
]
    const props: ProductListProps = {
        listTitle: 'Fake List',
        products,
    }

    const renderList = () => render(<ProductList {...props} />);

    it('renders ProductList correctly', () => {
        renderList();
        screen.getByRole('heading', { name: 'Fake List'});
        products.forEach(product => {
            screen.getByText(product.name);
            screen.getByAltText(product.photoURL);
            screen.getByText(product.id);
        })
    });
});
