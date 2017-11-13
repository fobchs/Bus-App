import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const BusDetail = ({ bus }) => {
  const { Name, Bus_ID__c, Has_Air_Conditioning__c, Maximum_Capacity__c, Odometer_Reading__c, Year__c, Wheels__c } = bus;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  function priceCal() {
    var price = 0.00;

    if (Maximum_Capacity__c >= 24) {
      price = 120000.00;
    } 
    if (Maximum_Capacity__c >= 36) {
      price = 160000.00;
    }

    if (Has_Air_Conditioning__c) {
      price = price * 1.03;
    }

    if (Year__c <= 1972) {
      price = price * 1.34;
    }

    var extraMile = (Odometer_Reading__c - 100000) > 0 ? (Odometer_Reading__c - 100000) : 0;
    price = price - extraMile * 0.10;
    return price.toFixed(2);
  }

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{Name}</Text>
          <Text>{Bus_ID__c}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View style={headerContentStyle}>
          <Text>Year: {Year__c}</Text>
          <Text>Miles: {Odometer_Reading__c}</Text>
          <Text>Seats: {Maximum_Capacity__c}</Text>
          <Text>Air Condition: {Has_Air_Conditioning__c.toString()}</Text>
          <Text>Wheels: {Wheels__c}</Text>          
          <Text>Price: ${priceCal()}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => alert("You have selected: " + Name)}>
          Available
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default BusDetail;
