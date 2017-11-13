import React, { Component } from 'react';
import { ScrollView, TextInput } from 'react-native';
import axios from 'axios';
import BusDetail from './BusDetail';

class BusList extends Component {
  state = { text: '', busses: [] };

  componentWillMount() {
    axios.get('https://sitetrakerrecruiting-developer-edition.na73.force.com/services/apexrest/getBusses')
      .then(response => this.setState({ busses: response.data }));
  }

  renderListOfBusses() {
    var inputText = this.state.text;
    return this.state.busses.map(function(bus, i) {
      if (!isNaN(inputText)) {
        if (bus.Maximum_Capacity__c >= parseInt(inputText)) {
          return <BusDetail key={bus.Id} bus={bus} />
        }
      }
    });
  }

  render() {
    return (
      <ScrollView>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        {this.renderListOfBusses()}
      </ScrollView>
    );
  }
}

export default BusList