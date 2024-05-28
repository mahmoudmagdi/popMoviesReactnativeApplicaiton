import {View, StyleSheet} from 'react-native';
import React from 'react';
import InformationItem from './InformationItem';

function MovieDetails({
  customStyle = null,
  original_language = '',
  popularity = 0,
  vote_average = 0,
  vote_count = 0,
  direction = 'column',
}): React.JSX.Element {
  let content = (
    <>
      <View style={styles.informationContainer}>
        <InformationItem iconName="globe-africa" text={original_language} />
        <InformationItem iconName="users" text={popularity} />
      </View>
      <View style={styles.informationContainer}>
        <InformationItem
          iconName="star"
          text={`${vote_average} (${vote_count})`}
        />
      </View>
    </>
  );

  if (direction === 'row') {
    content = (
      <>
        <View style={styles.informationContainer}>
          <InformationItem iconName="globe-africa" text={original_language} />
          <InformationItem iconName="users" text={popularity} />
          <InformationItem
            iconName="star"
            text={`${vote_average} (${vote_count})`}
          />
        </View>
      </>
    );
  }

  return <View style={[styles.outerContainer, customStyle]}>{content}</View>;
}

export default MovieDetails;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
