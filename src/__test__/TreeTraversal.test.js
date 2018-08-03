import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TreeTraversal from '../components/TreeTraversal';

describe('<TreeTraversal />', () => {
  const wrapper = shallow(<TreeTraversal />);
  it('renders TreeTraversal without crashing', () => {
    wrapper;
  });
  it('TreeTraversal matches snapshot', () => {
    const tree = renderer.create(<TreeTraversal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('playing is set false', () => {
    expect(wrapper.state('isPlaying')).toEqual(false);
  });
  it('BFS Traversal start', () => {
    const arr = ['34', '23', '92', '12', '04', '16', '09'];
    wrapper.instance().bft();
    expect(wrapper.state('list')).toEqual(arr);
  });
  it('InOrder Traversal start', () => {
    const arr = ['12', '23', '16', '04', '09', '34', '92'];
    wrapper.instance().inOrder();
    expect(wrapper.state('list')).toEqual(arr);
  });
  it('PreOrder Traversal start', () => {
    const arr = ['34', '23', '12', '04', '16', '09', '92'];
    wrapper.instance().preOrder();
    expect(wrapper.state('list')).toEqual(arr);
  });
  it('postOrder Traversal start', () => {
    const arr = ['12', '16', '09', '04', '23', '92', '34'];
    wrapper.instance().postOrder();
    expect(wrapper.state('list')).toEqual(arr);
  });
});
