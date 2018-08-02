import React from 'react';
import { shallow } from 'enzyme';
import TreeTraversal from '../components/TreeTraversal.jsx';

describe('<TreeTraversal />', () => {
  it('renders TreeTraversal without crashing', () => {
    shallow(<TreeTraversal />);
  });
});
