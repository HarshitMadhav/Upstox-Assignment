import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PnlCell = ({pnlValue = '-'}) => {
  return (
    <View style={styles.pnlContainer}>
      <Text style={styles.pnlTitleStyle}>
        P/L:
        <Text style={styles.pnlValueStyle}> ₹ {pnlValue}</Text>
      </Text>
    </View>
  );
};

export default PnlCell;

const styles = StyleSheet.create({
  pnlContainer: {
    paddingVertical: 4,
  },
  pnlTitleStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#31363F',
  },
  pnlValueStyle: {
    fontWeight: 'bold',
    color: '#000000',
  },
});
