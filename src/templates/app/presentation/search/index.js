require('./styles.scss');

import React, { PropTypes } from 'react';
import debounce from 'lodash/debounce'

class Search extends React.Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
  }

  componentDidMount() {
    const { cooldown, onSearch } = this.props;
    this.onSearch = debounce(this.props.onSearch, cooldown);
  }

  onValueChange(evt) {
    this.onSearch(evt.target.value);
  }

  render() {
    return (
      <div className="search-widget">
        <input type="text" onChange={ this.onValueChange } placeholder="Search..." />
      </div>
    );
  };
};

Search.defaultProps = {
  cooldown: 200
}

Search.propTypes = {
  onSearch: PropTypes.func
};

export default Search;
