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
    test('<LandingSheep /> renders harmless sheep on launch', () => {
        const expected = '<div id="sheep">';
        const wrapper = shallow(<LandingSheep />);
        expect(wrapper.html()).toMatch(expected);
    });
    test('<LandingSheep /> Hovering img changes the state hover to true', () => {
        const wrapper = shallow(<LandingSheep />);
        wrapper.find('#landing-sheep').simulate('mouseenter');
        expect(wrapper.state('hover')).toBeTruthy;
    });
    test('<LandingSheep /> if hover state is true the electric-sheep img is displayed', () => {
        const expected = '<div id="electric-sheep">';
        const wrapper = shallow(<LandingSheep />);
        wrapper.find('#landing-sheep').simulate('mouseenter');
        expect(wrapper.html()).toMatch(expected);
    });
    test('<LandingSheep /> click on the sheep will renders id=game component', () => {
        const expected = ' id="game" ';
        const wrapper = shallow(<LandingSheep />);
        wrapper.find('#landing-sheep').simulate('click', { preventDefault() {} });
        expect(wrapper.html()).toMatch(expected);
    });
})