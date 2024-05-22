import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LtpCell = ({ltpValue = '-'}) => {
  return (
    <View style={styles.ltpContainer}>
      <Text style={styles.ltpTitleStyle}>
        LTP:
        <Text style={styles.ltpValueStyle}> ₹ {ltpValue}</Text>
      </Text>
    </View>
  );
};

export default LtpCell;

const styles = StyleSheet.create({
  ltpContainer: {
    paddingTop: 4,
  },
  ltpTitleStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#31363F',
  },
  ltpValueStyle: {
    fontWeight: 'bold',
    color: '#000000',
  },
});
