import React from 'react';
import { Wrapper, BreadcrumbNav, BreadcrumbList } from './styles';
import BreadcrumbsItem from './breadcrumbsItems/BreadcrumbsItem';

interface BreadCrumbsData {
  breadcrumbs: CurrentData[];
}

interface CurrentData {
  id: string;
  name: string;
  link: string;
}

const Breadcrumbs: React.FC<BreadCrumbsData> = ({ breadcrumbs }) => {
  return (
    <Wrapper className="container">
      <BreadcrumbNav>
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            <BreadcrumbsItem
              key={breadcrumb.id}
              breadcrumb={breadcrumb}
              active={breadcrumbs.length - 1 === index}
            />
          ))}
        </BreadcrumbList>
      </BreadcrumbNav>
    </Wrapper>
  );
};

export default Breadcrumbs;
