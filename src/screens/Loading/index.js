import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { View, Text, LoaderScreen, Colors } from "react-native-ui-lib"; //eslint-disable-line

import { NAMEAPP } from "../../config/strings";
import {I18n, c, AppIcons} from '../../common';


class LoadingScreen extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.checkUserData();
    }, 500);
  }

  checkUserData = async () => {
    console.log("user data", this.props.loggedIn);
    if (this.props.loggedIn) {
      //render author
    } else {
      AppIcons.iconsLoaded.then(() => {
        this.onClickSwitchToTabs();
      });
    }
  };

  onClickSwitchToTabs = () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                id: "TAB1_ID",
                children: [
                  {
                    component: {
                      name: `${NAMEAPP}.tabupdatescreen`,
                      passProps: {
                        text: "This is tab 1",
                        myFunction: () => "Hello from a function!"
                      }
                    }
                  }
                ],
                options: {
                  topBar: {
                    visible: false
                  },
                  bottomTab: {
                    backgroundColor: '#EC2F34',
                    text: I18n.t("tab.tabYourHome"),
                    selectedTextColor: c.contants.white,
                    textColor: c.contants.borderColor,
                    iconColor: c.contants.borderColor,
                    selectedIconColor: c.contants.white,
                    icon: AppIcons.iconsMap.home,
                    selectedIcon: AppIcons.iconsMap["home--active"]

                    
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: `${NAMEAPP}.tabsearchscreen`,
                      passProps: {
                        text: "This is tab 2"
                      }
                    }
                  }
                ],
                options: {
                  topBar: {
                    visible: false
                  },
                  bottomTab: {
                    backgroundColor: '#EC2F34',
                    selectedTextColor: c.contants.white,
                    textColor: c.contants.borderColor,
                    text: I18n.t("tab.tabUpdate"),
                    iconColor: c.contants.borderColor,
                    selectedIconColor: c.contants.white,
                    icon: AppIcons.iconsMap.retweet,
                    selectedIcon: AppIcons.iconsMap["retweet--active"]
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
                        text: "This is tab 2"
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    backgroundColor: '#EC2F34',
                    selectedTextColor: c.contants.white,
                    textColor: c.contants.borderColor,
                    text: I18n.t("tab.tabSaveHome"),
                    iconColor: c.contants.borderColor,
                    selectedIconColor: c.contants.white,
                    icon: AppIcons.iconsMap.heart,
                    selectedIcon: AppIcons.iconsMap["heart--active"]
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
                        text: "This is tab 2"
                      }
                    }
                  }
                ],
                options: {
                  topBar: {
                    visible: false
                  },
                  bottomTab: {
                    backgroundColor: '#EC2F34',
                    selectedTextColor: c.contants.white,
                    textColor: c.contants.borderColor,
                    text: I18n.t("tab.tabMore"),
                    iconColor: c.contants.borderColor,
                    selectedIconColor: c.contants.white,
                    icon: AppIcons.iconsMap["ios-more"],
                    selectedIcon: AppIcons.iconsMap["ios-more--active"]
                  }
                }
              }
            }
          ],
          options: {
            bottomTabs: {
              backgroundColor: '#EC2F34',
              titleDisplayMode: 'alwaysShow'
              // testID: testIDs.BOTTOM_TABS_ELEMENT
            }
          }
        }
      }
    });
  };

  render() {
    const { loading, animationConfig } = this.state;
    return (
      <View flex bg-orange70 center>
        {/* <Text text5>123 123 123</Text> */}
        {loading && (
          <LoaderScreen
            color={Colors.blue60}
            message="Đang tải..."
            overlay
            {...animationConfig}
          />
        )}
      </View>
    );
  }
}
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
  { withRef: true }
)(LoadingScreen);
