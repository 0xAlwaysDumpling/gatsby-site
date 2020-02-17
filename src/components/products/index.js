import React from "react";
import styled from "@emotion/styled";
import ProductItem from "./ProductItem";
import useProducts from "../../hooks/use-products";

const Section = styled.div`
    display: flex;
    justify-content: center;
 `;

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

const ProductsHeader = styled.div`
    width: 100%;
`;

const ProductsTitle = styled.h1`
    color: ${props => props.theme.text};
    font-weight: 900;
    line-height: 1;
    text-align: left;
    margin-bottom: 4rem;
    padding-bottom: 12px;
    border-bottom: 1px solid #777;
    width: 100%;
`;

const ProductsDescription = styled.p`
    color: ${props => props.theme.text};
    font-weight: 400;
    line-height: 1.75;
    text-align: left;
    margin: -3rem 0 2rem;
    font-size: 1.4rem;
`;

const ProductItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function ProductsLanding() {
  const products = useProducts();
  return (
    <Section>
      <ProductsContainer>
        <ProductsHeader>
          <ProductsTitle>Products</ProductsTitle>
          <ProductsDescription>
            Random stuff I've bought and my thoughts on them. Some of these products are made by friends of mine!
          </ProductsDescription>
        </ProductsHeader>
        <ProductItemsContainer>
          {
            products.map((product, i) => <ProductItem key={i} props={product} />)
          }
        </ProductItemsContainer>
      </ProductsContainer>
    </Section>
  );
}

export default ProductsLanding;