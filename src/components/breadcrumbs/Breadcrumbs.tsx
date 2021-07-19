import React from 'react';
import { Wrapper, BreadcrumbNav, BreadcrumbList } from './styles';
import BreadcrumbsItem from './breadcrumbsItems/BreadcrumbsItem';
import { useCategories } from '../../context/CategoriesContext';

const Breadcrumbs: React.FC = () => {
  const { current, getCurrent } = useCategories();

  React.useEffect(() => {
    getCurrent('/data/categories.json');

    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper className="container">
      <BreadcrumbNav>
        <BreadcrumbList>
          {current &&
            current.map((breadcrumb, index) => (
              <BreadcrumbsItem
                key={breadcrumb.id}
                breadcrumb={breadcrumb}
                active={current.length - 1 === index}
              />
            ))}
        </BreadcrumbList>
      </BreadcrumbNav>
    </Wrapper>
  );
};

export default Breadcrumbs;
