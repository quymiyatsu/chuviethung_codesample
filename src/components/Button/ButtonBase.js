import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import {Button} from 'react-native-ui-lib'; //eslint-disable-line

import styles from './styles';

const ButtonBase = props => (
  //   <TouchableWithoutFeedback onPress={props.onPress}>
  //     <View style={styles.containerBtnIcon}>
  //       <Image style={styles.iconBtnIcon} source={props.icon}/>
  //       <View style={styles.txtContainerBtnIcon}>
  //         <Text style={styles.textBtnIcon}>{props.text}</Text>
  //       </View>
  //     </View>
  //   </TouchableWithoutFeedback>
  <Button
    label={props.text}
    outline
    borderRadius={props.border}
    outlineColor={'white'}
    labelStyle={{
      fontWeight: '700',
      color: props.colorText === undefined ? 'white' : props.colorText
    }}
    style={{
      width: '100%',
      backgroundColor: props.backgroundColor,
      marginBottom: props.marginBottom
    }}
    onPress={props.onPress}
    {...props}
  />
);

ButtonBase.prototype = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default ButtonBase;
