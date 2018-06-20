import React, { Component } from 'react';
import { AppRegistry, Text, View, Image as Gambar } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class Psg extends Component {
  render() {
    return (
      <Gambar source={this.props.pic} style={{width: 193, height: 110}}/>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hellou {this.props.name} {this.props.age} !</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxari' age='30'/>
        <Greeting name='Jainai' age='32'/>
        <Greeting name='Veraina' age='390'/>
        <Psg pic={pic}/>
        <Blink text='wakwauuuu'/>
      </View>
    );
  }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);