// @flow
import React from 'react';
import {View} from 'react-native';
import {ConnectionStatusBar} from 'react-native-ui-lib';
import {I18n} from '../common';

ConnectionStatusBar.registerGlobalOnConnectionLost(() => {
  // console.warn('what what?!? connection has been lost');
});
// import {Loading} from '../components';

export default (Comp: ReactClass<*>) => {
  return ({statusNetwork, children, ...props}: Object) => (
    <View style={{flex: 1}}>
      <Comp {...props}>{children}</Comp>
      <ConnectionStatusBar
        label={I18n.t('alert.lostConnect')}
        onConnectionChange={isConnected => statusNetwork(isConnected)}
      />
    </View>
  );
};
