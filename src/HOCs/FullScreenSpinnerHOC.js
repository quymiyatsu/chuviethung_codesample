// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
// import {Loading} from '../components';

export default (Comp: ReactClass<*>) => {
  return ({spinner, children, ...props}: Object) => (
    <View style={{flex: 1}}>
      <Comp {...props}>{children}</Comp>
      {spinner && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              justifyContent: 'center',
              alignItems: 'center'
            }
          ]}
        >
          {/* <Loading/> */}
        </View>
      )}
    </View>
  );
};
