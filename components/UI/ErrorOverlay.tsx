import {View, Text, StyleSheet} from 'react-native';

import React from 'react';
import {GlobalStyle} from '../../constants/styles.tsx';

interface ErrorOverlayProps {
  message: string;
}

function ErrorOverlay({message}: ErrorOverlayProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    height: 650,
  },
  text: {
    color: GlobalStyle.colors.black,
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalStyle.colors.black,
  },
});
