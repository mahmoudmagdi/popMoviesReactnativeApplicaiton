import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function TopRatedScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Top rated Movies Screen</Text>
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
