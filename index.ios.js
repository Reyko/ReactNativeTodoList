import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

var react_native_todo_list = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to Phoenix API with React native Tutorial
        </Text>
      </View> 
    )
  }
});


var styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

AppRegistry.registerComponent('react_native_todo_list', () => react_native_todo_list);
