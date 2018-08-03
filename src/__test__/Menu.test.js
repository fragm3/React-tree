import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Menu from '../components/Menu.jsx';

describe('<Menu />', () => {
  const wrapper = shallow(<Menu />);
  const selectMenu = wrapper.find('button.menu-button');

  it('renders Menu without crashing', () => {
    wrapper;
  });
  it('Menu matches snapshot', () => {
    const tree = renderer.create(<Menu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('dont show menu on start', () => {
    expect(wrapper.state('showMenu')).toEqual(false);
  });
  it('menu show set traversal by default', () => {
    expect(wrapper.state('menuText')).toEqual('Select traversal');
  });
  it('on click Select traversal', () => {
    selectMenu.simulate('click');
    const text = wrapper.state('menuText');
    expect(text).toEqual('Select traversal');
  });
  it('Show menu on click', () => {
    selectMenu.simulate('click');
    const text = wrapper.state('showMenu');
    expect(text).toEqual(true);
  });
});
