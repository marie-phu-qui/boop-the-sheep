import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import App from '../../client/components/App';

describe('<App />', () => {
    test('renders component without crashing', () => {
        const wrapper = shallow(<App/>)
    });
    test('<App /> contains all : <Header /><LandingButton /><LandingSheep /><Footer />" components', () => {
        const expected = '<Header /><LandingButton /><LandingSheep /><Footer />';
        const wrapper = shallow(<App />);
        expect(wrapper.text()).toMatch(expected);
    });
})