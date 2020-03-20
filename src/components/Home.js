import React,{Component} from 'react';
import {View,Text,TextInput}  from 'react-native';
import Profile from './Profile';


class Home extends Component{

    constructor(){
        super();
        this.state={
            data:"test",
        }
    }

    change(x){
        // return x*10;

        this.setState({data:x*10})

    }
    render(){
        return(
            <View>
                <Text>Home Component</Text>
                <Profile/>

                <TextInput
                    testID={'username'}
                    onChangeText={(text)=> this.change(text)}
                    placeholder="Enter a username in the provided field"
                >

                </TextInput>
            </View>
        )
    }
}



export default Home;


