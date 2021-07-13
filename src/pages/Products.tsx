import React from 'react';
import { ProductsList } from './styles';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Filter from '../components/filter/Filter';
import ProductItem from '../components/productItem/ProductItem';
import Loading from '../components/loading/Loading';
import { useProducts } from '../context/ProductsContext';
import { useCategories } from '../context/CategoriesContext';

const Products: React.FC = () => {
  const { products, filtered, filters, loading } = useProducts();
  const { current } = useCategories();

  return (
    <main className="container animeLeft">
      {current && <Breadcrumbs breadcrumbs={current} />}

      {loading && <Loading />}

      {filters && <Filter filters={filters} />}

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
