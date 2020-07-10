import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('render whitouh crashing', () => {
  shallow(<App/>);
})
