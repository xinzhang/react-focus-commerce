import React, {PropTypes, Component} from 'react';
import { shallow } from 'enzyme';
import ProductCard from './ProductCard';

function setup() {
  const props = {
    product: jest.fn(),
    key: 1
  }

  const enzymeWrapper = shallow(<ProductCard {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Product card', () => {
  test('should render a product item', () => {
    const {enzymeWrapper} = setup();
    expect(enzymeWrapper.find('.product-thumb').length).toBe(1);
  })  
})
