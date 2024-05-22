import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LtpCell from './subComponents/LtpCell';
import PnlCell from './subComponents/PnlCell';
import holdingUtils from '../../utils';

/**
 * LtpCell and PnlCell can be put in separate containers so as to increase performance
 */
const HoldingListItem = ({scripItem = {}, index}) => {
  const {symbol = '', quantity = 0, ltp = '-', avgPrice = 0} = scripItem;

  const pnlValue = holdingUtils.pnlValueCalculate(ltp, quantity, avgPrice);

  return (
    <View style={styles.container}>
      <View style={styles.rowStyle}>
        <Text style={styles.symbolStyle}>{symbol}</Text>
        <LtpCell ltpValue={ltp} />
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.quantityStyle}>{quantity}</Text>
        <PnlCell pnlValue={pnlValue} />
      </View>
    </View>
  );
};

export default HoldingListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  rowStyle: {
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbolStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  quantityStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#393E46',
  },
});
