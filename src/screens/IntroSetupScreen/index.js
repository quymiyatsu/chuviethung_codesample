import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Assets} from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather';

import {NAMEAPP} from '../../config/strings';
import {ButtonBase} from '../../components/Button';
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

class IntroSetupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      birdthDay: I18n.t('login.birthday')
    };
    Navigation.events().bindComponent(this);
    this.actionSkip = this.actionSkip.bind(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: `1 ${I18n.t('title.of')} 4`,
          alignment: 'center'
        },
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
    if (buttonId === 'btnNext') {
      Navigation.push(this.props.componentId, {
        component: {
          name: `${NAMEAPP}.usersetuplocation`,
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

  actionSkip = async () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: `${NAMEAPP}.usersetuplocation`,
        options: {
          topBar: {
            visible: true
          }
        }
      }
    });
  };

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
                name="home"
                size={c.contants.widthDevice / 8}
                color={'white'}
                style={styles.iconTop}
              />
              <Text style={styles.txtTop}>{I18n.t('intro.labelTop')}</Text>
              <Text style={styles.txtSubTop}>
                {I18n.t('intro.labelSubTop')}
              </Text>
              {/* <ButtonBase
                marginBottom={15}
                text={I18n.t('action.submit')}
                backgroundColor={c.contants.blurWhiteColor}
              />
              <ButtonBase
                marginBottom={15}
                text={I18n.t('action.submit')}
                backgroundColor={c.contants.blurWhiteColor}
              />
              <ButtonBase
                marginBottom={15}
                text={I18n.t('action.submit')}
                backgroundColor={c.contants.blurWhiteColor}
              /> */}

              <ButtonBase
                marginBottom={15}
                text={I18n.t('action.submit')}
                colorText={c.contants.primaryColor}
                backgroundColor={c.contants.white}
              />
            </View>
            <TouchableOpacity onPress={this.actionSkip}>
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
    marginTop: 30,
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
)(IntroSetupScreen);
