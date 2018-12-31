import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const ButtonIconFill = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={[
        styles.containerBtnIconFill,
        {backgroundColor: props.backgroundColor}
      ]}
    >
      <Image style={styles.iconBtnIconFill} source={props.icon}/>
      <View style={styles.txtContainerBtnIconFill}>
        <Text style={[styles.textBtnIconFill, {color: props.textColor}]}>
          {props.text}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

ButtonIconFill.prototype = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default ButtonIconFill;
