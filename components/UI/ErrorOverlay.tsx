import {View, Text} from 'react-native';

import React from 'react';
import {errorStyles} from './ErrorStyle.tsx';
interface Props {
  message: string;
}
function ErrorOverlay({message}: Props): React.JSX.Element {
  return (
    <View style={errorStyles.container}>
      <Text style={[errorStyles.text, errorStyles.title]}>
        An error occurred!
      </Text>
      <Text style={errorStyles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;
