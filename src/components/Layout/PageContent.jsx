import React from 'react';
import PropTypes from 'prop-types';

function PageContent({ children }) {
  return <div className="page-content">{children}</div>;
}

export default PageContent;

PageContent.propTypes = {
  children: PropTypes.element.isRequired,
};
