require('./styles.scss');
import React, { PropTypes } from 'react';

const renderItem = (item, ...props) => {
  return (<div className="item" key={ item.Id }>
    <div className="header">{item.Id}</div>
    <div className="name">{item.Subject}</div>
  </div>);
};

const renderItems = (items) => {
  return (<div className="item-list">
    { items.map(renderItem) }
  </div>);
};

const renderNoItems = () => {
  return (<span>No objects returend</span>);
};

const ItemList = ({ items }) => {
  return items.length > 0 ? renderItems(items) : renderNoItems();
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ItemList;
