import React from 'react';
import { fetchCases } from './actions';
import { connect } from 'react-redux';
import isArray from 'lodash/isArray';
import ItemList from '../../presentation/item-list';
import Search from '../../presentation/search';
import Loading from '../../presentation/loading';
import map from 'lodash/map';

class Cases extends React.Component {

  render() {
    const { cases, fetchCases } = this.props;

    return (
      <div>
        <Search onSearch={ fetchCases } />
        <Loading isLoading={ cases.isFetching }>
          <ItemList items={ map(cases.entities.case, item => item) }/>
        </Loading>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return { cases: state.cases }
};

const mapDispatchToProps = { fetchCases };

export default connect(mapStateToProps, mapDispatchToProps)(Cases)
