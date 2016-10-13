import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

var ReactNativeTodoList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      todos: [],
      dataSource: ds.cloneWithRows([])
    }
  },

  componentDidMount: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return this._getTodosFromApi()
      .then((data) => {
        this.setState({
          dataSource: ds.cloneWithRows(data)
        });
      });
  },

  _getTodosFromApi: function() {
    return fetch("http://localhost:4000/api/todos")
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      });
  }, 

  render: function() {
    var _this = this;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
            Welcome to Phoenix API with React Native Tutorial!
          </Text>
        </View>
        <View style={styles.content}>
          <SwipeListView
            dataSource={_this.state.dataSource}
            renderRow={(todo) =><View style={styles.todo}><Text>{todo.title}</Text></View>}
            renderHiddenRow={data => (
              <View style={styles.rowBack}>
                <Text>Delete</Text>
              </View>
             )}

            rightOpenValue={-45}/>
        </View>
      </View> 
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    borderBottomWidth: 0.5
  },
  content: {
    flex: 7,
  },
  todo: {
    borderBottomWidth: 0.5,
    height: 60
  },
  rowBack: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('ReactNativeTodoList', () => ReactNativeTodoList);
