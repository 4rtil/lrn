import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card.js';

it('validates Card component against snapshot', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})