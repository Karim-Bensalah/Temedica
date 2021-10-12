import React from 'react';
import {Text, StyleSheet} from 'react-native';
import tailwind from 'tailwind-rn';
export default function Box(props) {
  return (
    <Text
      {...props}
      style={[StyleSheet.flatten([tailwind(props?.className), props?.style])]}>
      {props?.children}
    </Text>
  );
}
