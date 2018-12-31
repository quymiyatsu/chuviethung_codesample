import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Assets, Switch} from 'react-native-ui-lib';
import _ from 'lodash';

import {I18n, c, AppIcons} from '../../common';

Assets.loadAssetsGroup('icons', {
  backgroundImage: require('../../assets/banner-night.png')
});

import {NAMEAPP} from '../../config/strings';
import * as HOC from '../../HOCs';
import FlatlistBase from '../../components/FlatlistBase';

const DimissKeyboard = HOC.DismissKeyboardHOC(View);
const FullScreenNetStatusHOC = HOC.FullScreenNetStatusHOC(DimissKeyboard);

/**
 * handle bussines logic here, check userdata > render author or render unauthor
 */

class UserSetupRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      multiSliderValue: [0, 100],
      exactBedroom: false,
      dataRoom: [
        {
          id: 0,
          value: 'Any',
          isSelected: true
        },
        {
          id: 1,
          value: '1+',
          isSelected: false
        },
        {
          id: 2,
          value: '2+',
          isSelected: false
        },
        {
          id: 3,
          value: '3+',
          isSelected: false
        },
        {
          id: 4,
          value: '4+',
          isSelected: false
        },
        {
          id: 5,
          value: '5+',
          isSelected: false
        }
      ]
    };
    AppIcons.iconsLoaded.then(() => {
      Navigation.events().bindComponent(this);
    });
    this.multiSliderValuesChange = this.multiSliderValuesChange.bind(this);
    this.renderItemRoom = this.renderItemRoom.bind(this);
    // this.handleClickRoom = this.this.handleClickRoom.bind(this);
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
      //change to tabbar
      AppIcons.iconsLoaded.then(() => {
        this.onClickSwitchToTabs();
      });
      // AppIcons.iconsLoaded.then(() => {
      //   Navigation.setStackRoot(this.props.componentId, {
      //     bottomTabs: {
      //       children: [
      //         {
      //           stack: {
      //             children: [
      //               {
      //                 component: {
      //                   name: `${NAMEAPP}.tabsearchscreen`,
      //                   options: {
      //                     bottomTab: {
      //                       selectedTextColor: c.contants.primaryColor,
      //                       textColor: c.contants.borderColor,
      //                       text: I18n.t('tab.tabSearch'),
      //                       icon: require('../../assets/icon_user_login.png'),
      //                       selectedIcon: require('../../assets/icon_user_login.png')
      // icon: AppIcons.iconsMap.search,
      // selectedIcon: AppIcons.iconsMap['search--active']
      //                     }
      //                   }
      //                 }
      //               }
      //             ]
      //           }
      //         },
      //         {
      //           component: {
      //             name: `${NAMEAPP}.tabupdatescreen`,
      //             options: {
      //               bottomTab: {
      //                 selectedTextColor: c.contants.primaryColor,
      //                 textColor: c.contants.borderColor,
      //                 text: I18n.t('tab.tabUpdate'),
      // icon: AppIcons.iconsMap.retweet,
      // selectedIcon: AppIcons.iconsMap['retweet--active']
      //               }
      //             }
      //           }
      //         },
      //         {
      //           component: {
      //             name: `${NAMEAPP}.tabsavehomescreen`,
      //             options: {
      //               bottomTab: {
      // selectedTextColor: c.contants.primaryColor,
      // textColor: c.contants.borderColor,
      // text: I18n.t('tab.tabSaveHome'),
      // icon: AppIcons.iconsMap.heart,
      // selectedIcon: AppIcons.iconsMap['heart--active']
      //               }
      //             }
      //           }
      //         },
      //         {
      //           component: {
      //             name: `${NAMEAPP}.tabyourhomescreen`,
      //             options: {
      //               bottomTab: {
      // text: I18n.t('tab.tabYourHome'),
      // selectedTextColor: c.contants.primaryColor,
      // textColor: c.contants.borderColor,
      // icon: AppIcons.iconsMap.home,
      // selectedIcon: AppIcons.iconsMap['home--active']
      //               }
      //             }
      //           }
      //         },
      //         {
      //           component: {
      //             name: `${NAMEAPP}.tabmorescreen`,
      //             options: {
      //               bottomTab: {
      // selectedTextColor: c.contants.primaryColor,
      // textColor: c.contants.borderColor,
      // text: I18n.t('tab.tabMore'),
      // icon: AppIcons.iconsMap['ios-more'],
      // selectedIcon: AppIcons.iconsMap['ios-more--active']
      //               }
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   });
      // });
    }
  }

  onClickSwitchToTabs = () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                id: 'TAB1_ID',
                children: [
                  {
                    component: {
                      name: `${NAMEAPP}.tabsearchscreen`,
                      passProps: {
                        text: 'This is tab 1',
                        myFunction: () => 'Hello from a function!'
                      }
                    }
                  }
                ],
                options: {
                  topBar: {
                    visible: false
                  },
                  bottomTab: {
                    selectedTextColor: c.contants.primaryColor,
                    textColor: c.contants.borderColor,

                    text: I18n.t('tab.tabSearch'),

                    iconColor: c.contants.borderColor,
                    selectedIconColor: c.contants.primaryColor,

                    icon: AppIcons.iconsMap.search,
                    selectedIcon: AppIcons.iconsMap['search--active']
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${NAMEAPP}.tabupdatescreen`,
                      passProps: {
                        text: 'This is tab 2'
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    selectedTextColor: c.contants.primaryColor,
                    textColor: c.contants.borderColor,
                    text: I18n.t('tab.tabUpdate'),
                    iconColor: c.contants.borderColor,
                    selectedIconColor: c.contants.primaryColor,
                    icon: AppIcons.iconsMap.retweet,
                    selectedIcon: AppIcons.iconsMap['retweet--active']
                    // testID: testIDs.SECOND_TAB_BAR_BUTTON
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${NAMEAPP}.tabsavehomescreen`,
                      passProps: {
                        text: 'This is tab 2'
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    selectedTextColor: c.contants.primaryColor,
                    textColor: c.contants.borderColor,
                    text: I18n.t('tab.tabSaveHome'),
                    iconColor: c.contants.borderColor,
                    selectedIconColor: c.contants.primaryColor,
                    icon: AppIcons.iconsMap.heart,
                    selectedIcon: AppIcons.iconsMap['heart--active']
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${NAMEAPP}.tabyourhomescreen`,
                      passProps: {
                        text: 'This is tab 2'
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: I18n.t('tab.tabYourHome'),
                    selectedTextColor: c.contants.primaryColor,
                    textColor: c.contants.borderColor,
                    iconColor: c.contants.borderColor,
                    selectedIconColor: c.contants.primaryColor,
                    icon: AppIcons.iconsMap.home,
                    selectedIcon: AppIcons.iconsMap['home--active']
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${NAMEAPP}.tabmorescreen`,
                      passProps: {
                        text: 'This is tab 2'
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    selectedTextColor: c.contants.primaryColor,
                    textColor: c.contants.borderColor,
                    text: I18n.t('tab.tabMore'),
                    iconColor: c.contants.borderColor,
                    selectedIconColor: c.contants.primaryColor,
                    icon: AppIcons.iconsMap['ios-more'],
                    selectedIcon: AppIcons.iconsMap['ios-more--active']
                  }
                }
              }
            }
          ],
          options: {
            bottomTabs: {
              // titleDisplayMode: 'alwaysShow'
              // testID: testIDs.BOTTOM_TABS_ELEMENT
            }
          }
        }
      }
    });
  };

  componentDidMount() {}
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.dataRoom !== this.state.dataRoom) {
  //     return true;
  //   }
  // }

  multiSliderValuesChange = values => {
    this.setState({
      multiSliderValue: values
    });
  };

  handleClickRoom = item => {
    _.map(this.state.dataRoom, x => {
      if (x.id === item.id) {
        x.isSelected = true;
      } else {
        x.isSelected = false;
      }
      return x;
    });
    // console.log('datarom', this.state.dataRoom);
    this.forceUpdate();
  };

  renderItemRoom = ({item, index}) => {
    // console.log(index);
    return (
      <TouchableOpacity onPress={() => this.handleClickRoom(item)}>
        <View
          key={index}
          style={{
            width: 48,
            height: 48,
            borderLeftWidth:
              index === 0 || index === this.state.dataRoom.length - 1 ? 1 : 0.5,
            borderRightWidth:
              index === 0 || index === this.state.dataRoom.length - 1 ? 1 : 0.5,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderTopLeftRadius: index === 0 ? 5 : 0,
            borderBottomLeftRadius: index === 0 ? 5 : 0,
            borderTopRightRadius:
              index === this.state.dataRoom.length - 1 ? 5 : 0,
            borderBottomRightRadius:
              index === this.state.dataRoom.length - 1 ? 5 : 0,
            // borderRadius: 5,
            borderColor: c.contants.white,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: item.isSelected ? c.contants.white : 'transparent'
          }}
        >
          <Text
            style={{
              color: item.isSelected ?
                c.contants.primaryColor :
                c.contants.white,
              fontSize: 16
            }}
          >
            {item.value}
          </Text>
        </View>
      </TouchableOpacity>
    );
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
              <Text style={styles.textHeader}>34,169</Text>
              <Text center style={styles.txtTop}>
                {I18n.t('intro.labelTopS4')}
              </Text>
              <View style={styles.spector}/>
              <Text center style={styles.txtMid}>
                {I18n.t('intro.labelTopS6')}
              </Text>
              <View
                style={{
                  height: 48,
                  width: c.contants.widthDevice,
                  alignItems: 'center'
                }}
              >
                <FlatlistBase
                  extraData={this.state.dataRoom}
                  scrollEnabled={false}
                  style={{height: 48}}
                  horizontal
                  data={this.state.dataRoom}
                  renderItem={this.renderItemRoom}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: 20
                }}
              >
                <Text center style={styles.txtTop}>
                  {I18n.t('intro.labelBtmS6')}
                </Text>
                <Switch
                  value={this.state.exactBedroom}
                  onValueChange={() => {
                    this.setState({exactBedroom: !this.state.exactBedroom});
                  }}
                />
              </View>
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
  textHeader: {
    fontSize: 45,
    fontWeight: '900',
    color: c.contants.white,
    marginBottom: 10
  },
  imgBg: {
    flex: 1,
    width: c.contants.widthDevice
  },
  txtTop: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'normal',
    marginBottom: 15
  },
  txtMid: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15
  },
  spector: {
    width: c.contants.widthDevice,
    height: StyleSheet.hairlineWidth,
    backgroundColor: c.contants.white
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
)(UserSetupRoom);
