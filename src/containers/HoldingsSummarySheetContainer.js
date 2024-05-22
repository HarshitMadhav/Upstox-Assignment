import React, {useState, useEffect} from 'react';
import HoldingSummary from '../components/HoldingSummary';

const HoldingsSummarySheetContainer =
  WrappedComponent =>
  ({holdings = []}) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const toggleSheet = () => {
      setIsSheetOpen(!isSheetOpen);
    };

    return (
      <WrappedComponent
        holdings={holdings}
        isSheetOpen={isSheetOpen}
        toggleSheet={toggleSheet}
      />
    );
  };

export default HoldingsSummarySheetContainer(HoldingSummary);
