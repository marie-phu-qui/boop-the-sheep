import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Header from '../../client/components/Header';

describe('<Header />', () => {
    test('renders Header component without crashing', () => {
        const wrapper = shallow(<Header/>)
    });
    test('<Header /> contains a writing of the title', () => {
        const expected = 'Boop the sheep';
        const wrapper = shallow(<Header />);
        expect((wrapper.text()).toUpperCase()).toMatch(expected.toUpperCase());
    });
})