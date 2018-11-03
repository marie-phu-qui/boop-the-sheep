import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import GameSheep from '../../client/components/GameSheep';

describe('<GameSheep />', () => {
    test('renders GameSheep component without crashing', () => {
        const wrapper = shallow(<GameSheep/>)
    });
})