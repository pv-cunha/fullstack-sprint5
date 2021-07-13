import React from 'react';
import { Anchor, Separator, BreadcrumbList } from './styles';

interface BreadCrumbItemData {
  breadcrumb: BreadCrumbData;
  active?: boolean;
}

interface BreadCrumbData {
  name: string;
  link: string;
}

const BreadcrumbsItem: React.FC<BreadCrumbItemData> = ({
  breadcrumb,
  active,
}) => {
  const { link, name } = breadcrumb;

  return (
    <BreadcrumbList>
      <Anchor className={`${active && 'active'}`} href={link}>
        {name}
      </Anchor>
      <Separator className={`${active && 'active'}`}>/</Separator>
    </BreadcrumbList>
  );
};

export default BreadcrumbsItem;
