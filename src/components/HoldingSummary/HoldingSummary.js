import React, {useMemo, useState} from 'react';
import {StyleSheet, Animated, TouchableOpacity, Easing} from 'react-native';
import {noop} from 'lodash-es';
import RowItem from './subComponent/RowItem';
import holdingUtils from '../../utils';

const HoldingSummary = ({
  holdings = [],
  isSheetOpen = false,
  toggleSheet = noop,
}) => {
  const [animation] = useState(new Animated.Value(0));
  const holdingsSummary = useMemo(() => {
    return holdingUtils.getHoldingSummary(holdings);
  }, [holdings]);

  const onPressIcon = () => {
    Animated.timing(animation, {
      toValue: isSheetOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start(() => {
      toggleSheet();
    });
  };

  const rotateImage = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  });

  return (
    <Animated.View style={[styles.container, {transform: [{translateY}]}]}>
      <TouchableOpacity style={styles.imageContainer} onPress={onPressIcon}>
        <Animated.Image
          style={[styles.image, {transform: [{rotateX: rotateImage}]}]}
          source={require('../../assets/images/up-arrow.png')}
        />
      </TouchableOpacity>
      {isSheetOpen && (
        <>
          <RowItem
            label="Current Value:"
            value={holdingsSummary?.currentValue}
          />
          <RowItem
            label="Total Investment:"
            value={holdingsSummary?.investmentValue}
          />
          <RowItem
            label="Today's Profit & Loss:"
            value={holdingsSummary?.todaysPnlValue}
          />
        </>
      )}

      <RowItem
        customStyles={{container: styles.rowContainer}}
        label="Profit & Loss:"
        value={holdingsSummary?.totalPnlValue}
      />
    </Animated.View>
  );
};

export default HoldingSummary;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 16,
    backgroundColor: '#EFEFEF',
  },
  rowContainer: {
    marginTop: 22,
  },
  imageContainer: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
