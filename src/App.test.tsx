import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing",()=>{
  const wrapper = shallow(<App/>)
  // console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
})

test("render without error",()=>{
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
})


test("renders increment button",()=>{
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find("[data-test='increment-button']");
  expect(appComponent.length).toBe(1);
})

test("renders counter display",()=>{
  const wrapper = shallow(<App/>);
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  expect(counterDisplay.length).toBe(1);
})

test("counter starts at zero",()=>{

})

test("clicking button increment counter display",()=>{

})
