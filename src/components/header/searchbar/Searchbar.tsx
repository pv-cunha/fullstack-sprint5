import React from 'react';
import { useProducts } from '../../../context/ProductsContext';
import { Input, InputSVG, Wrapper } from './styles';

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
    <Wrapper>
      <InputSVG src="assets/search.svg" alt="" />
      <label htmlFor="searchbar" className="escondeVisualmente">
        O que você está procurando ?
      </label>
      <Input
        id="searchbar"
        type="search"
        placeholder="O que você está procurando?"
        ref={text}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Searchbar;
