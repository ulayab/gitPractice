import * as React from 'react';
import {Button} from 'react-native-paper';

export default function ButtonExample() {
  return (
    <Button
      raised
      theme={{roundness: 3}}
      mode="contained"
      onPress={() => console.log('hi!')}>
      Press me
    </Button>
  );
}
