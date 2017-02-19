/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View

} from 'react-native';
import api from './api/api';



export default class testproject extends Component {

  constructor(props){
  super(props);
  this.state = {
  fields: [],
  label:'',
  mandatory:'',
  type:[]

    }
  }

  componentWillMount(){
  api.getFields().then((res) => {
      this.setState ({

          fields:res.fields,
          label:res.fields[0].label,
          mandatory:res.fields[0].mandatory,
          type:res.fields[0].type[0]
      })
  });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
          {"\n"}
          type : {this.state.type}
          {"\n"}
          label : {this.state.label}
          {"\n"}{"\n"}
          mandatory : {this.state.mandatory.toString()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testproject', () => testproject);
