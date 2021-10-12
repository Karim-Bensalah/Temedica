import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Box from '../components/Box';
import Text from '../components/Text';
import Colors from '../configs/Colors';
const labels = {
  search: 'Search',
};
export default function SearchContainer(props) {
  return (
    <Box className="m-5">
      <Text className="text-base text-black font-bold">{labels?.search}</Text>
      <TextInput style={styles.input} onChangeText={props.onChange} />
    </Box>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 5,
  },
});
