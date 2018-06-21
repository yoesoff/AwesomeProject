import React, { Component } from 'react';
import {Text, TextInput, View} from 'react-native';

class TextViewer extends Component {
    constructor(props) {
      super(props);
      this.state = {xxx: 'mulai !'}
    }

    render() {
      return (
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(xxx) => this.setState({xxx})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.xxx + '🍕'}
          </Text>
        </View>
      );
    }
}

export default class PizzaTranslator extends Component {
  render() {
    return (
      <TextViewer />
    );
  }
}



// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
