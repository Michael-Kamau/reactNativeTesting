import 'react-native';
import React from 'react';
import Home from '../../src/components/Home';

import renderer from 'react-test-renderer';

let findElement = function (tree, element) {

    // console.warn(tree,element)
    console.warn(tree.children);
    let result = undefined;
    for (node in tree.children) {
        if(tree.children[node].props.testID == element){
            result = true;
        }
    }
    return result;
};


it('find Element', () => {
    let tree = renderer.create(
        <Home/>,
    ).toJSON();

    expect(findElement(tree, 'username')).toBeDefined();
});
