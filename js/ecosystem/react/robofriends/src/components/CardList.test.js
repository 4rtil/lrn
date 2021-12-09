import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('validates Card component against snapshot', () => {
    const stubbedRobots = [
        {
            id: 1,
            name: 'John Doe',
            username: 'doehoe',
            email: 'jj@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={stubbedRobots} />)).toMatchSnapshot();
})