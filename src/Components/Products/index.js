import React from 'react';
import { Link } from 'react-router-dom';

import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductButton
} from './ProductsElements';


const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((event, index) => {
          return (
            <ProductCard key={index}>
             {event.img &&  <ProductImg src={event.img} alt={event.alt} />}
              <ProductInfo>
                <ProductTitle>{event.name}</ProductTitle>
                <ProductDesc>{event.startDate}</ProductDesc>
                <ProductDesc>{event.endDate}</ProductDesc>
                <Link to={`/event/${event._id}`}>
                <ProductButton>View Details</ProductButton>
                </Link>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;