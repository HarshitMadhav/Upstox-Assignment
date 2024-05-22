import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RowItem = ({label = '', value = '', customStyles = {}}) => {
  return (
    <View style={[styles.container, customStyles?.container]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>₹{value}</Text>
    </View>
  );
};

export default RowItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
    color: '#393E46',
  },
});
