import {CommonActions} from '@react-navigation/native';
import * as React from 'react';
import {Button} from 'react-native-paper';

export default function CommonButton(props) {
  let {action, title} = props;
  return (
    <Button raised theme={{roundness: 3}} mode="contained" onPress={action}>
      {title}
    </Button>
  );
}
