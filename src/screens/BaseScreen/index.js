import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {View, Assets} from 'react-native-ui-lib';
import _ from 'lodash';

import {I18n, c} from '../../common';

Assets.loadAssetsGroup('icons', {
  backgroundImage: require('../../assets/banner-night.png')
});

import * as HOC from '../../HOCs';

const DimissKeyboard = HOC.DismissKeyboardHOC(View);
const FullScreenNetStatusHOC = HOC.FullScreenNetStatusHOC(DimissKeyboard);

/**
 * handle bussines logic here, check userdata > render author or render unauthor
 */

class TabMoreScreen extends Component {
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
        title: {
          text: `4 ${I18n.t('title.of')} 4`,
          alignment: 'center'
        },
        leftButtons: [
          {
            id: 'btnBack',
            text: I18n.t('action.back'),
            disableIconTint: true,
            color: c.contants.primaryColor
          }
        ],
        rightButtons: [
          {
            id: 'btnNext',
            text: I18n.t('action.next'),
            color: c.contants.primaryColor
          }
        ]
      }
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
      />
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
)(TabMoreScreen);
