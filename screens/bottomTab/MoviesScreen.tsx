import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function MoviesScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Movies Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
