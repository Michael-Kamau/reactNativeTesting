import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Profile from './Profile';
import Users from './Users';


class Home extends Component {

    constructor() {
        super();
        this.state = {
            data: 'test',
        };
    }

    componentDidMount() {
        Users.all().then((data) => {
            console.warn('check api data', data);

        });
    }

    change(x) {
        // return x*10;

        this.setState({data: x * 10});

    }

    render() {
        return (
            <View>
                <Text>Home Component</Text>
                <Profile data="jest testing ..."/>

                <TextInput
                    testID={'username'}
                    onChangeText={(text) => this.change(text)}
                    placeholder="Enter a username in the provided field"
                >

                </TextInput>
            </View>
        );
    }
}


export default Home;


