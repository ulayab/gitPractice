import React from 'react';
import {View, Text} from 'react-native';

import Button from '../Components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details XXX"
        action={() => navigation.navigate('Details')}
      />
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
}

export default HomeScreen;
