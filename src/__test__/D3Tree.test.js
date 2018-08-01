import React from 'react';
import { shallow } from 'enzyme';
import D3Tree from '../components/D3Tree.jsx';

describe('<D3Tree />', () => {
  it('renders D3Tree without crashing', () => {
    shallow(<D3Tree />);
  });
});
