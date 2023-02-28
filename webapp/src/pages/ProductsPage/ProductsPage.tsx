import React, { useEffect, useState } from "react";
import { ProductData } from "../../components/interfaces";
import ProductList from "../../components/ProductList/ProductList";
import Spinner from "../../components/Spinner/Spinner";
import { getAllProducts } from "../ApiHelper";
import PageWrapper from '../PageWrapper';

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState<'WAITING' | 'LOADED' | 'ERROR'>('WAITING');
  const [data, setData] = useState<ProductData>({ Active: [], InActive: [] });

  const getProducts = async () => {
    setLoadingState('WAITING');
    const { productData, errorOccured } = await getAllProducts();
    setData(productData);
    setLoadingState(errorOccured ? 'ERROR' : 'LOADED');
  }

  useEffect(() => {
    getProducts();
  }, []);

  let content;
  if (loadingState === 'WAITING')
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  else if (loadingState === 'LOADED')
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="products-container"
      >
        <ProductList
          listTitle='Active'
          products={data.Active}
        />
        <ProductList
          listTitle='InActive'
          products={data.InActive}
        />
      </div>
    );
  else
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );

  return (
    <PageWrapper>
      {content}
    </PageWrapper>
  );
};

export default ProductsPage
