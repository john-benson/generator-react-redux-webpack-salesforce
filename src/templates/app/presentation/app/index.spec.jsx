import React from 'react';
import App from './index';
import Header from '../header';
import { wrap } from 'react-stateless-wrapper';
import { expect } from 'chai';

import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils'

import { findDOMNode } from 'react-dom';


describe('App', () => {
  it('should render it\'s children and a header', function () {
    // stateless components need to be wrapped in order to work
    const test = 'test123';
    const WrappedApp = wrap(App);
    const component = renderIntoDocument(<WrappedApp>{ test }</WrappedApp>);

    const header = findRenderedDOMComponentWithClass(component, 'header');
    expect(header).to.not.be.null;
    expect(component.props.children).to.equal(test);
  });
})
