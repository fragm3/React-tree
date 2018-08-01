import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../components/Menu.jsx';

describe('<Menu />', () => {
  it('renders Menu without crashing', () => {
    shallow(<Menu />);
  });
});
