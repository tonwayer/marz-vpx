import { screen } from "@testing-library/react"

export const expectLoadingSpinner = () => {
    screen.getByTestId(`loading-spinner-container`);
};

export const expectErrorContainer = () => {
    expect(screen.getByTestId(`error-container`));
};

export const expectProductsContainer = () => {
    expect(screen.getByTestId(`products-container`));
};
