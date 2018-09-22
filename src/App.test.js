import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
  * Factory function to create a ShallowWrapper for the App component
  * @function setup
  * @param {object} props - Component props specific to this setup
  * @param {object} state - Initial state for setup
  * @returns {ShallowWrapper}
*/
const setup = (props={}, state={}) => {
  const wrapper = shallow(<App {...props}/>)

  if (state) wrapper.setState(state)
  return wrapper
}

/**
  * Returns ShallowWrapper comtaining the node(s) with the given data-test value.
  * @function findByTestAttr
  * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
  * @param {string} value - Value of the data-test attribute for search
  * @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`)
}

it('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent).toHaveLength(1)
});

it('renders increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button).toHaveLength(1)
});

it('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay).toHaveLength(1)
});

it('counter starts at zero', () => {
  const wrapper = setup()
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
});

it('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter })

  // Find button and click
  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')
  wrapper.update()
  expect(wrapper.state('counter')).toBe(8);

  // Find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter + 1);
});
