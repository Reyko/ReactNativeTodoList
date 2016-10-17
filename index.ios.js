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
          <Text style={styles.headerText}>
            Welcome to Phoenix API with React Native Tutorial!
          </Text>
        </View>
        <View style={styles.content}>
          <SwipeListView
            dataSource={_this.state.dataSource}
            renderRow={(todo) =><View style={styles.todo}><Text style={styles.todoText}>{todo.title}</Text></View>}
            renderHiddenRow={data => (
              <View style={styles.rowBack}>
                <Text style={styles.deleteBtn}>Delete</Text>
              </View>
             )}
            rightOpenValue={-45}
            disableRightSwipe={true}/>
        </View>
      </View> 
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#ecf0f1'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    backgroundColor: '#1abc9c',
  },
  headerText: {
    fontWeight: '600'
  },
  content: {
    flex: 7,
  },
  todo: {
    borderBottomWidth: 0.5,
    height: 60,
    backgroundColor: '#34495e',
  },
  todoText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#fff',
    marginTop: 21,
    marginLeft: 100
  },
  rowBack: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#e74c3c'
  },
  deleteBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('ReactNativeTodoList', () => ReactNativeTodoList);
