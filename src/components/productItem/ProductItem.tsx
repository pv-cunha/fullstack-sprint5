import React from 'react';
import { Card, CardDescription, CardImg, CardPrice } from './styles';

interface ProductItemData {
  name: string;
  image: string;
  price: string;
  sku: string;
}

interface ProductData {
  product: ProductItemData;
}

const ProductItem: React.FC<ProductData> = ({ product }) => {
  const { name, image, price, sku } = product;
  return (
    <li aria-labelledby={`${image}-${sku}`}>
      <Card>
        <figure>
          <CardImg src={image} alt={name} />
          <CardDescription id={`${image}-${sku}`}>{name}</CardDescription>
          <span>
            <CardPrice>R$ {price}</CardPrice>
          </span>
        </figure>
      </Card>
    </li>
  );
};

export default ProductItem;
