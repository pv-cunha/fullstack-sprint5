import React from 'react';
import styles from './BreadcrumbsItem.module.css';

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
    <li>
      <a className={`${styles.link} ${active && styles.active}`} href={link}>
        {name}
      </a>
      <span className={`${styles.separator} ${active && styles.display}`}>
        /
      </span>
    </li>
  );
};

export default BreadcrumbsItem;
