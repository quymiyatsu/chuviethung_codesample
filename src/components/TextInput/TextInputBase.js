import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

const TextInputBase = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={styles.containerBase}>
      <TextInput
        clearButtonMode="while-editing"
        style={styles.textinputBase}
        underlineColorAndroid="transparent"
        // placeholderTextColor="rgba(255, 255, 255, 0.75)"
        {...props}
      />
    </View>
  </TouchableWithoutFeedback>
);

TextInputBase.prototype = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  editable: PropTypes.bool,
  onPress: PropTypes.func
};

export default TextInputBase;
