import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing",()=>{
  const wrapper = shallow(<App/>)
  console.log(wrapper.debug());
})
