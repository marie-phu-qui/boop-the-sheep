import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import LandingButton from '../../client/components/LandingButton';

describe('<LandingButton />', () => {
    test('renders LandingButton component without crashing', () => {
        const wrapper = shallow(<LandingButton/>)
    });
    test('is a clickable component', () => {
        const expected = 'href=' || 'button';
        const wrapper = shallow(<LandingButton />);
        expect(wrapper.html()).toMatch(expected);
    });
})