import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Game from '../../client/components/Game';

describe('<Game />', () => {
    test('renders Header component without crashing', () => {
        const wrapper = shallow(<Game />)
    });
    test('I can see a flat background', () => {
        const expected = 'pouet' 
        const wrapper = shallow(<Game />);
        console.log(wrapper.html())
        expect(wrapper.text()).toMatch(expected)
    });
    // test('The sheeps are rendered', () => {
    //     const expected = 'Boop the sheep';
    //     const wrapper = shallow(<Game />);
    //     expect((wrapper.text()).toUpperCase()).toMatch(expected.toUpperCase());
    // });
    // test('The sheeps are moving', () => {
    //     const expected = 'Boop the sheep';
    //     const wrapper = shallow(<Game />);
    //     expect((wrapper.text()).toUpperCase()).toMatch(expected.toUpperCase());
    // });
})