import { render, screen } from "@testing-library/react"
import { Product } from "../interfaces"
import ProductItem from "./ProductItem"

describe('ProductItem', () => {
    const props: Product = {
        id: 0,
        name: 'Fake Product',
        photoURL: '/fake-url',
        status: 'Active'
    }
    const renderItem = () => render(<ProductItem {...props} />);

    it('renders ProductItem correctly', () => {
        renderItem();
        screen.getByText('Fake Product');
        screen.getByAltText('/fake-url');
        screen.getByText('0');
    });
});
