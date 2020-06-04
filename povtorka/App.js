import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import data from './student.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true, 
      dataSource: [], 
    };
  }

  componentDidMount() {
            this.setState({
              isLoading: false, 
              dataSource: data.students
            });
  }

  render() {
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
              <View>
                <Text style={styles.students}>{item.id}, {item.name}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  students: {
    fontSize: 20,
  }
});