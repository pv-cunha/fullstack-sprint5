import React from 'react';
import styles from './Breadcrumbs.module.css';
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
    <div className={`${styles.breadcrumbs} container`}>
      <nav className={styles.breadcrumbsNav}>
        <ol className={styles.breadcrumbsList}>
          {breadcrumbs.map((breadcrumb, index) => (
            <BreadcrumbsItem
              key={breadcrumb.id}
              breadcrumb={breadcrumb}
              active={breadcrumbs.length - 1 === index}
            />
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
