import React from 'react';
import {shallow, mount} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import App from '../../client/components/App';
import Game from '../../client/components/Game';
import Header from '../../client/components/Header';
import LandingButton from '../../client/components/LandingButton';
import LandingSheep from '../../client/components/LandingSheep';
import Footer from '../../client/components/Footer';


describe('<App />', () => {
    test('renders App component without crashing', () => {
        const wrapper = shallow(<App/>)
    });
    test('<App /> contains all : <Header /><LandingButton /><LandingSheep /><Footer />" components', () => {
        const expected = '<Header /><LandingButton /><LandingSheep /><Footer />';
        const wrapper = shallow(<App />);
        expect(wrapper.text()).toMatch(expected);
    });
    test('<App /> when click LandingSheep components renders Game component', () => {
        const wrapper = mount(<App />);
        wrapper.find('#landing-sheep').simulate('click');
        const actual = wrapper.containsMatchingElement(<Game />)
        expect(actual).toBeTruthy()
    });
    test('<App /> when click LandingButton components go back to intial Landing', () => {
        const expected = '<div id="electric-sheep">';
        const wrapper = mount(<App />);
        wrapper.find('#landing-btn').simulate('click');
        const actual = wrapper.containsAllMatchingElements([<Header />, <LandingButton />, <LandingSheep />, <Footer />])
        expect(actual).toBeTruthy()
        wrapper.unmount();
    });
})