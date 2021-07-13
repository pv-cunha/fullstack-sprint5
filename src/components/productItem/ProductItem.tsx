import React from 'react';
import styles from './ProductItem.module.css';

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
    <li className={styles.listItem} aria-labelledby={`${image}-${sku}`}>
      <div className={styles.card}>
        <figure>
          <img src={image} alt={name} className={styles.img} />
          <figcaption className={styles.description} id={`${image}-${sku}`}>
            {name}
          </figcaption>
          <span>
            <p className={styles.price}>R$ {price}</p>
          </span>
        </figure>
      </div>
    </li>
  );
};

export default ProductItem;
