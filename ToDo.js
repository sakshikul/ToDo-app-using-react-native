import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';



class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            text : ''
        }
    }

    handleChange = (text) => {
        this.setState({
            text : text
        })
    }

    onSubmit = (event) =>{
        event.preventDefault();
        if(!this.state.text.length){
            return ;
        }

        this.setState({
            items : [...this.state.items, this.state.text],
            text : ''
        })
    }
    render(){
        return(
            <View>
                <Text>To Do App In React native</Text>
                <TextInput 
                    placeholder = "Type something here"
                    value = {this.state.text}
                    onChangeText = {this.handleChange}
                />
                <TouchableHighlight onPress = {this.onSubmit}>
                    <Text>Create The List</Text>
                </TouchableHighlight>
                <View>
                {this.state.items.map((item) => (<Text key= {i}>{item}</Text>)) }          
                </View>
            </View>
        )
    }

}

export default ToDo;