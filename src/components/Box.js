import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';
export default function Box(props) {
  const Component = props.onPress ? TouchableOpacity : View;
  return (
    <Component
      {...props}
      style={[StyleSheet.flatten([tailwind(props?.className), props?.style])]}>
      {props?.children}
    </Component>
  );
}
