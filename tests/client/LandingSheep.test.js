import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import LandingSheep from '../../client/components/LandingSheep';

describe('<LandingSheep />', () => {
    test('renders LandingSheep component without crashing', () => {
        const wrapper = shallow(<LandingSheep/>)
    });
    test('<LandingSheep /> contains an img', () => {
        const expected = 'img';
        const wrapper = shallow(<LandingSheep />);
        expect(wrapper.html()).toMatch(expected);
    });
})