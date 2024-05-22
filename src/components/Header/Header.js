import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title = ''}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#842e92',
    height: 60,
    padding: 16,
  },
  titleStyle: {
    fontSize: 18,
    color: 'white',
  },
});
