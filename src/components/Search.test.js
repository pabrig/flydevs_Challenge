import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Tests  search', () => {
	it('test ok ', () => {
		const wrapper = shallow(<Search />)
		expect(wrapper).toHaveLength(1);
	})
})