import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Images from '../images';
import Box from './Box';

export default function Header() {
  return (
    <Box className="flex flex-row justify-center items-center pt-10">
      <Image source={Images.logo} style={styles.logo} />
    </Box>
  );
}
const styles = StyleSheet.create({
  logo: {height: 100, width: 100},
});
