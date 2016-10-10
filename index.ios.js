import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';


var react_native_todo_list = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var todoItems = [
      {id: 1, title: 'Todo 1'},
      {id: 2, title: 'Todo 2'},
      {id: 3, title: 'Todo 3'}
    ];
    return {
      dataSource: ds.cloneWithRows(todoItems)
    };
  },
  
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
            Welcome to Phoenix API with React Native Tutorial!
          </Text>
        </View>
        <View style={styles.content}>
          <SwipeListView
            dataSource={this.state.dataSource}
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

AppRegistry.registerComponent('react_native_todo_list', () => react_native_todo_list);
