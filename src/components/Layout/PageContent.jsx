import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/page-content.scss';

function PageContent({ children }) {
  return <div className="page-content">{children}</div>;
}

export default PageContent;

PageContent.propTypes = {
  children: PropTypes.element.isRequired,
};
