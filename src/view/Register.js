import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

import styles from '../utility/styles';

import api from '../services/api';

export default class Register extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
    }
  }

  register = async () => {
    const data = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    await api.post('/register', {
      ...data
    })
    .then((response) => {
      let error = ""
      for (let msg of response.data) {
        error += msg.message + "\n" 
      }

      Alert.alert("Atenção", error)
    })

  }

  return = () => {
    this.props.navigation.goBack();
  }

  render(){
    return (
      <View style={styles.screenLogin}>
        <View style={{alignItems:'center'}}>
          <Image
            style={styles.screenLoginImage}
            source={require('../utility/img/imgLogin.png')}
          />
        </View>
        
        <TextInput
          style={styles.screenLoginInput}
          onChangeText={(text) => { this.setState({ name:text }) }}
          placeholder= 'Nome...'
          textContentType='none'
        />

      <TextInput
          style={styles.screenLoginInput}
          onChangeText={(text) => { this.setState({ username:text }) }}
          placeholder= 'Usuário...'
          textContentType='none'
        />

        <TextInput
          style={styles.screenLoginInput}
          onChangeText={(text) => { this.setState({ email:text }) }}
          placeholder= 'Email...'
          textContentType='none'
        />
        
        <TextInput
          style={styles.screenLoginInput}
          onChangeText={(text) => { this.setState({ password:text }) }}
          placeholder= 'Senha...'
          textContentType='password'
        />

        <TouchableOpacity
          style={styles.screenLoginButton}
          onPress={()=>{this.register()}}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.screenLoginButton}
          onPress={()=>{this.return()}}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}