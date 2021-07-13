import React from 'react';
import { useProducts } from '../../../context/ProductsContext';
import styles from './Searchbar.module.css';

const Searchbar: React.FC = () => {
  const { filtered, filterProducts, clearFilter } = useProducts();

  const text = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (filtered === null && text.current !== null) {
      text.current.value = '';
    }
  }, [filtered]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (text.current && text.current.value !== null) {
      filterProducts(target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div className={styles.searchbar}>
      <img className={styles.searchbarSVG} src="assets/search.svg" alt="" />
      <label htmlFor="searchbar__input" className="escondeVisualmente">
        O que você está procurando ?
      </label>
      <input
        className={styles.searchbarInput}
        id="searchbar__input"
        type="search"
        placeholder="O que você está procurando?"
        ref={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;
