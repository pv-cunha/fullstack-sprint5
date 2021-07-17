import React from 'react';
import { useProducts } from '../../../context/ProductsContext';
import { Input, InputSVG, Wrapper } from './styles';

const Searchbar: React.FC = () => {
  const { filterProducts, clearFilter } = useProducts();
  const [text, setText] = React.useState<string>('');

  React.useEffect(() => {
    if (text !== '') {
      filterProducts(text);
    } else {
      clearFilter();
    }

    // eslint-disable-next-line
  }, [text]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
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
        value={text}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Searchbar;
