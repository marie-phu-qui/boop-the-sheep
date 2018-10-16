import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Game from '../../client/components/Game';

describe('<Game />', () => {
    test('renders Header component without crashing', () => {
        console.log('pouet poeut pouet')
        const wrapper = shallow(<Game/>)
        console.log(wrapper.text() + 'hello helo hello')

    });
// // Test to be done :
    test('I can see a flat background', () => {
        const expected = '' 
        const wrapper = shallow(<Game/>)
        console.log(wrapper + 'hello helo hello')
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
    // test('the state sheep is an object with specific electric state', () => {
    //     const expected = 'Boop the sheep';
    //     const wrapper = shallow(<Game />);
    //     expect((wrapper.text()).toUpperCase()).toMatch(expected.toUpperCase());
    // });
})