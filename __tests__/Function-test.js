import 'react-native'
import React from 'react'
import Home from '../src/components/Home';
import 'isomorphic-fetch';

import renderer from 'react-test-renderer';

it('check function and state test case',()=>{
    let HomeData =renderer.create(<Home/>).getInstance();

    HomeData.change(2)
    // console.log(HomeData)

    // expect(HomeData.change(2)).toEqual(20 )
    expect(HomeData.state.data).toEqual(20 )


})
