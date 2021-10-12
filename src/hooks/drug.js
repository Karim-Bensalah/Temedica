import React from 'react';
import axios from 'axios';
import {API} from '../configs/api';
const useDrugQuery = ({filter = ''}) => {
  const [state, setState] = React.useState([]);
  const [loading, setLoading] = React.useState([]);
  const [err, setError] = React.useState();
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(API + '/drugs')
      .then(httpResponse => {
        console.log({httpResponse});
        if (httpResponse.data) {
          setLoading(false);
          setState(httpResponse.data);
          return null;
        }
      })
      .catch(err => {
        console.log({err});
        setError(err);
      });
  }, []);
  return {
    data: state,
    loading: loading,
  };
};
export {useDrugQuery};
