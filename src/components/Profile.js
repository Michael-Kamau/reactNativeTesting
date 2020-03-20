import React,{Component} from 'react';
import {View,Text}  from 'react-native';


class Profile extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.data}</Text>
            </View>
        )
    }
}



export default Profile;


