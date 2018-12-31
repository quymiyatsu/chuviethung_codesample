import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import {View, Text, Assets} from 'react-native-ui-lib';

import {NAMEAPP} from '../../config/strings';
import {TextInputBase} from '../../components/TextInput';
import {ButtonBase} from '../../components/Button';
import {I18n, c} from '../../common';

Assets.loadAssetsGroup('icons', {
  iconUser: require('../../assets/icon_user_login.png'),
  iconPhoneMail: require('../../assets/icon_email.png'),
  iconCalendar: require('../../assets/iconcalendar.png'),
  iconPassword: require('../../assets/iconpassword.png'),
  iconFacebook: require('../../assets/iconfacebook.png'),
  iconZalo: require('../../assets/iconzalo.png'),
  iconApp: require('../../assets/icon_app.png'),
  backgroundImage: require('../../assets/banner-night.png')
});

/**
 * handle bussines logic here, check userdata > render author or render unauthor
 */

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      birdthDay: I18n.t('login.birthday')
    };
    this.changeRoot = this.changeRoot.bind(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          // text: '1 of 6',
          alignment: 'center'
        },
        rightButtons: [
          {
            id: 'next',
            text: I18n.t('action.next'),
            color: c.contants.primaryColor
          }
        ]
      }
    };
  }

  componentDidMount() {}

  changeRoot = async () => {
    Navigation.setStackRoot(this.props.componentId, {
      component: {
        name: `${NAMEAPP}.introsetupscreen`,
        options: {
          animated: true,
          topBar: {
            visible: true,
            alignment: 'center'
            // component: {name: `${NAMEAPP}.customtopbar`}
          }
        }
      }
    });

    // Navigation.setRoot({
    //   root: {
    //     stack: {
    //       children: [
    //         {
    //           component: {
    //             name: `${NAMEAPP}.introsetupscreen`,
    //             options: {
    //               animated: true,
    //               topBar: {
    //                 visible: true,
    //                 alignment: 'center'
    //                 // component: {name: `${NAMEAPP}.customtopbar`}
    //               }
    //             }
    //           }
    //         }
    //       ]
    //     }
    //   }
    // });
  };

  render() {
    return (
      <View flex center>
        <ImageBackground
          style={styles.imgBg}
          source={Assets.icons.backgroundImage}
        >
          <View flex style={{backgroundColor: c.contants.blurPrimaryColor}}>
            <View flex centerH padding-20>
              <Image source={Assets.icons.iconApp} style={styles.imgIconTop}/>
              <Text style={styles.txtEmail}>
                {I18n.t('login.labelInputEmail')}
              </Text>
              <TextInputBase editable placeholder={I18n.t('login.email')}/>
              <Text style={styles.txtPolicy} center>
                {I18n.t('login.labelPolicy')}{' '}
                <Text style={styles.txtTerm} center>
                  {I18n.t('login.labelTerm')}
                </Text>
              </Text>
              <ButtonBase border={5} text={I18n.t('action.submit')}/>

              <View row center marginT-30>
                <Text style={styles.txtOr}>Or</Text>
                <TouchableOpacity>
                  <Image
                    source={Assets.icons.iconZalo}
                    style={styles.btnSocial}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={Assets.icons.iconFacebook}
                    style={styles.btnSocial}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={this.changeRoot}>
              <Text center white style={styles.btnSkip}>
                {I18n.t('action.skip')}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    width: c.contants.widthDevice
  },
  imgIconTop: {
    width: c.contants.widthDevice / 8,
    height: c.contants.widthDevice / 8,
    marginBottom: 20
  },
  txtEmail: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30
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
)(LoginScreen);
