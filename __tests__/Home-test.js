import 'react-native';
import React from 'react';
import Home from '../src/components/Home'
import renderer from 'react-test-renderer'

test('Home snapshot',()=>{
    const snap= renderer.create(
        <Home />
    ).toJSON();


    expect(snap).toMatchSnapshot();
});
