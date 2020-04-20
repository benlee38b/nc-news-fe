import React from 'react';

export const Pages = (props) => {
  console.log(props);

  const handleClick = (page) => {
    props.fetchArticles({ p: page });
  };

  return (
    <ul className="page-list">
      {props.pages.map((page, index) => {
        return (
          <li
            className="pages"
            key={page + index}
            onClick={() => handleClick(page)}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
};