import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');

  return (
    <div className="col-12">
      <ul className="breadcrumb">
        <li className="breadcrumb__item">
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => (
          <li key={index} className={`breadcrumb__item ${index === paths.length - 1 ? 'breadcrumb__item--active' : ''}`}>
            {index === paths.length - 1 ? (
              path
            ) : (
              <Link to={`/${paths.slice(0, index + 1).join('/')}`}>{path}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
