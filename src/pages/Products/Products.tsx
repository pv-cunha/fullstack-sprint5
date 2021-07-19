import React from 'react';
import { ProductsList } from './styles';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Filter from '../../components/filter/Filter';
import ProductItem from '../../components/productItem/ProductItem';
import Loading from '../../components/loading/Loading';
import { ProductsContext } from '../../context/ProductsContext';

const Products: React.FC = () => {
  // const { products, filtered, filters, loading } = useProducts();
  const { products, filtered, loading, getProducts } =
    React.useContext(ProductsContext);

  React.useEffect(() => {
    getProducts('data/products.json');

    // eslint-disable-next-line
  }, []);

  return (
    <main className="container animeLeft">
      <Breadcrumbs />

      {loading && <Loading />}

      <Filter />

      <section>
        <ProductsList>
          {filtered.length > 0
            ? filtered.map((product) => (
                <ProductItem key={product.sku} product={product} />
              ))
            : products.map((product) => (
                <ProductItem key={product.sku} product={product} />
              ))}
        </ProductsList>
      </section>
    </main>
  );
};

export default Products;
