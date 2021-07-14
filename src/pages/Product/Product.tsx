import React from 'react';
import { Wrapper, ImageContainer, Content, Size, Button, Card } from './styles';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useAlert } from '../../context/AlertContext';
import { useProducts } from '../../context/ProductsContext';
import SelectSizes from '../../components/sizes/SelectSizes';

interface ParamsProps {
  id: string;
}

interface ProductItemData {
  name: string;
  image: string;
  price: string;
  sku: string;
}

const Product: React.FC = () => {
  const { products } = useProducts();
  const { addAlert } = useAlert();

  const { id } = useParams<ParamsProps>();
  const history = useHistory();

  const [product, setProduct] = React.useState<ProductItemData>(
    {} as ProductItemData,
  );

  const sizesModel = [{ size: 4 }, { size: 6 }, { size: 8 }, { size: 10 }];
  const [sizes, setSizes] = React.useState(sizesModel);
  const [size, setSize] = React.useState<number>();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    if (products) {
      const indexProduct = products.findIndex(
        (product) => Number(id) === Number(product.sku),
      );

      setProduct(products[indexProduct]);
    }
  }, [id, products]);

  const addCart = () => {
    addAlert({ text: 'Produto adicionado ao Carrinho', time: 4000 });

    history.push('/');
  };

  return (
    <Wrapper className={`animeLeft container`}>
      <ImageContainer>
        {product.image && (
          <img
            src={`${window.location.origin}/${product.image}`}
            alt={product.name}
          />
        )}
      </ImageContainer>

      <Content>
        <h2>{product.name}</h2>
        <p>Selecionar tamanho: {size}</p>
        <Size>
          {sizes.map((s) => (
            <SelectSizes
              key={s.size}
              size={s.size}
              selectedSize={size}
              setSize={setSize}
            >
              {s.size}
            </SelectSizes>
          ))}
        </Size>
        <Card>
          <span>R$: {product?.price}</span>

          <Button color="green" onClick={addCart}>
            Adicionar à sacola
          </Button>
          <Button color="red">
            <Link to="/">Cancelar</Link>
          </Button>
        </Card>
      </Content>
    </Wrapper>
  );
};

export default Product;
