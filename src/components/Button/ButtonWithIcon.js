import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import styles from './styles';

const ButtonWithIcon = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={styles.containerBtnIcon}>
      <Image style={styles.iconBtnIcon} source={props.icon}/>
      <View style={styles.txtContainerBtnIcon}>
        <Text style={styles.textBtnIcon}>{props.text}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

ButtonWithIcon.prototype = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default ButtonWithIcon;
