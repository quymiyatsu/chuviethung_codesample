import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const ButtonPrimary = props => {
  let containerStyles = [styles.container];
  let buttonTextStyles = [styles.buttonText];
  if (props.type === 'border') {
    containerStyles = [styles.containerBorder];
    buttonTextStyles = [styles.buttonTextBorder];
  }
  return (
    <TouchableOpacity {...props}>
      <View style={containerStyles}>
        <Text style={buttonTextStyles}>{props.buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

ButtonPrimary.prototype = {
  buttonText: PropTypes.string,
  type: PropTypes.string
};

export default ButtonPrimary;
