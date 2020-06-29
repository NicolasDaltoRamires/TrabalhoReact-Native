import React, { Component } from 'react';
import { TextInput, Button, Text } from 'react-native';

export default class Login extends Component {
    render() {
      return (
        <view>
            <textInput placeholder="Email" />
            <textInput placeholder="Senha" />   
            <Button>
                 <Text>Entrar</Text>
            </Button>
        </view>
      );
    }

}
