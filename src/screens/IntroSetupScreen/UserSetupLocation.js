import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Assets} from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {NAMEAPP} from '../../config/strings';
import {TextInputBase} from '../../components/TextInput';
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

class UserSetupLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      birdthDay: I18n.t('login.birthday')
    };
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: `2 ${I18n.t('title.of')} 4`,
          alignment: 'center'
        },
        leftButtons: [
          {
            id: 'btnBack',
            text: I18n.t('action.back'),
            enabled: true,
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
      Navigation.push(this.props.componentId, {
        component: {
          name: `${NAMEAPP}.usersetupprice`,
          options: {
            topBar: {
              visible: true
            }
          }
        }
      });
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
        <ImageBackground
          style={styles.imgBg}
          source={Assets.icons.backgroundImage}
        >
          <View flex style={{backgroundColor: c.contants.blurPrimaryColor}}>
            <View flex centerH padding-20>
              {/* <Image source={Assets.icons.iconZalo} style={styles.imgIconTop}/> */}
              <Feather
                name="map-pin"
                size={c.contants.widthDevice / 8}
                color={'white'}
                style={styles.iconTop}
              />
              <Text center style={styles.txtTop}>
                {I18n.t('intro.labelTopS3')}
              </Text>

              <Text center style={styles.txtSubTop}>
                {I18n.t('intro.labelSubTopS3')}
              </Text>
              <TextInputBase editable/>
              <Text style={styles.txtPolicy} center>
                <FontAwesome
                  name="location-arrow"
                  size={14}
                  color={c.contants.white}
                />{' '}
                {I18n.t('intro.labelBtmS3')}
              </Text>
            </View>
            <TouchableOpacity>
              <Text center white style={styles.btnSkip}>
                {I18n.t('action.skip')}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </FullScreenNetStatusHOC>
    );
  }
}

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    width: c.contants.widthDevice
  },
  iconTop: {
    marginBottom: 20
  },
  txtTop: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10
  },
  txtSubTop: {
    fontSize: 14,
    color: 'white',
    marginBottom: 20
  },
  txtPolicy: {
    fontSize: 12,
    color: 'white',
    marginTop: 15,
    marginBottom: 10
  },
  txtTerm: {
    fontSize: 12,
    color: 'white',
    marginTop: 30,
    marginBottom: 10,
    textDecorationLine: 'underline'
  },
  txtOr: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15
  },
  btnSocial: {
    width: c.contants.widthDevice / 8,
    height: c.contants.widthDevice / 8,
    borderRadius: c.contants.widthDevice / 8 / 2,
    marginRight: 15
  },
  btnSkip: {fontSize: 16, fontWeight: 'bold', marginBottom: 20}
});

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
)(UserSetupLocation);
