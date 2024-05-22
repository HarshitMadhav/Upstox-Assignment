import React, {useState, useEffect} from 'react';
import Holdings from '../screens/Holdings';
import API_ENDPOINTS from '../api/holdings';

const holdingsContainer = WrappedComponent => props => {
  const [holdings, setHoldings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.getHoldingDetails);
        const {data = {}} = await response.json();
        setHoldings(data?.userHolding); // Update holdings state with fetched data
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.log('err', error);
        setError(error); // Set error state if fetch fails
        setLoading(false); // Set loading state to false
      }
    };

    fetchData(); // Call fetchData function to make api call
  }, []);

  return (
    <WrappedComponent holdings={holdings} loading={loading} error={error} />
  );
};

export default holdingsContainer(Holdings);
