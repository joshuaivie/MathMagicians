import React from 'react';
import '../../styles/page-title.scss';
import PropTypes from 'prop-types';

function PageTitle({ children }) {
  return (
    <div className="page-title">{children}</div>
  );
}

export default PageTitle;

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
