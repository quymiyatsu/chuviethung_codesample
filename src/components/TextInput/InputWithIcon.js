import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

const InputWithIcon = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={styles.container}>
      <Image style={styles.icon} source={props.icon}/>
      <TextInput
        clearButtonMode="while-editing"
        style={styles.textinput}
        underlineColorAndroid="transparent"
        placeholderTextColor="rgba(255, 255, 255, 0.75)"
        {...props}
      />
    </View>
  </TouchableWithoutFeedback>
);

InputWithIcon.prototype = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  editable: PropTypes.bool,
  onPress: PropTypes.func
};

export default InputWithIcon;
