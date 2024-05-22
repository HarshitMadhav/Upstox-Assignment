import {StyleSheet, Text, View, FlatList} from 'react-native';
import {noop} from 'lodash-es';
import React from 'react';
import Header from '../../components/Header';
import HoldingsSummarySheetContainer from '../../containers/HoldingsSummarySheetContainer';
import HoldingListItem from '../../components/HoldingListItem';

const Holdings = ({holdings = [], loading = false, error = false}) => {
  const renderItem = ({item, index}) => {
    return <HoldingListItem scripItem={item} index={index} />;
  };

  if (error) {
    return <Text style={styles.errorText}>Something went wrong!!!</Text>;
  }
  return (
    <View style={styles.container}>
      <Header title="Upstox Holding" />
      {loading ? (
        <Text style={styles.loadingText}>Loading Holdings...</Text>
      ) : (
        <FlatList
          data={holdings}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={item => item?.symbol}
        />
      )}
      {!loading && <HoldingsSummarySheetContainer holdings={holdings} />}
    </View>
  );
};

export default Holdings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  contentContainer: {
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    paddingBottom: 80,
  },
  loadingText: {
    paddingVertical: 16,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  loadingText: {
    paddingVertical: 16,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});
