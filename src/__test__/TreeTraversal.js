import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../components/TreeTraversal';

describe('<TreeTraversal />', () => {
  it('renders TreeTraversal without crashing', () => {
    shallow(<TreeTraversal />);
  });
});
