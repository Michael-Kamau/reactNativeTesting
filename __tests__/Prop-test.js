import 'react-native'
import React from 'react'
import Profile from '../src/components/Profile';
import renderer from 'react-test-renderer'
import 'isomorphic-fetch';


import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('Testing props',()=>{
    const wrapper=shallow(<Profile data="Hello"/>).props();

    console.warn(wrapper.children.props.children);

    expect(wrapper.children.props.children).toEqual("Hello")
});
