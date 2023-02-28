import { render, screen } from "@testing-library/react"
import { Product } from "../interfaces"
import ProductItem from "./ProductItem"

describe('ProductItem', () => {
    const props: Product = {
        ProductID: 0,
        ProductName: 'Fake Product',
        ProductPhotoURL: '/fake-url',
        ProductStatus: 'Active'
    }
    const renderItem = () => render(<ProductItem {...props} />);

    it('renders ProductItem correctly', () => {
        renderItem();
        screen.getByText('Fake Product');
        screen.getByAltText('/fake-url');
        screen.getByText('0');
    });
});
