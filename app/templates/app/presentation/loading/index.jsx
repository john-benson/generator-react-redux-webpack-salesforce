import React, { PropTypes } from 'react';

const renderLoaded = (children) => {
    return (<div>{ children }</div>);
};

const renderLoading = () => {
  return (<div>Loading...</div>)
};

const Loading = ({ isLoading, children }) => {
  return isLoading ? renderLoading() : renderLoaded(children);
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Loading;
