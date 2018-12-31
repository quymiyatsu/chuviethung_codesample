import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {View, Assets, Text} from 'react-native-ui-lib';
import _ from 'lodash';

import {I18n, c} from '../../../common';

Assets.loadAssetsGroup('icons', {
  backgroundImage: require('../../../assets/banner-night.png')
});

import * as HOC from '../../../HOCs';

const DimissKeyboard = HOC.DismissKeyboardHOC(View);
const FullScreenNetStatusHOC = HOC.FullScreenNetStatusHOC(DimissKeyboard);

/**
 * handle bussines logic here, check userdata > render author or render unauthor
 */

class TabSaveHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0
    };
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        visible: false,
        drawBehind: true
      },
      bottomTabs: {
        backgroundColor: '#EC2F34',
        titleDisplayMode: 'alwaysShow'
      },
    };
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'btnBack') {
      Navigation.pop(this.props.componentId);
    } else if (buttonId === 'btnNext') {
      //
    }
  }

  componentDidMount() {}

  render() {
    return (
      <FullScreenNetStatusHOC
        flex
        center
        statusNetwork={iconnect => {
          console.log(iconnect);
        }}
      >
        <Text>TAb2</Text>
      </FullScreenNetStatusHOC>
    );
  }
}

const styles = StyleSheet.create({});

function mapStateToProps(store) {
  return {
    loggedIn: store.auth.loggedIn,
    userData: store.auth.userdata
  };
}

export default connect(
  mapStateToProps,
  null,
  null,
  {withRef: true}
)(TabSaveHomeScreen);
