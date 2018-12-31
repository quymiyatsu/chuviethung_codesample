import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Assets} from 'react-native-ui-lib';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {I18n, c} from '../../common';
import {NAMEAPP} from '../../config/strings';

Assets.loadAssetsGroup('icons', {
  backgroundImage: require('../../assets/banner-night.png')
});

import * as HOC from '../../HOCs';

const DimissKeyboard = HOC.DismissKeyboardHOC(View);
const FullScreenNetStatusHOC = HOC.FullScreenNetStatusHOC(DimissKeyboard);

/**
 * handle bussines logic here, check userdata > render author or render unauthor
 */

class UserSetupPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      multiSliderValue: [0, 100]
    };
    Navigation.events().bindComponent(this);
    this.multiSliderValuesChange = this.multiSliderValuesChange.bind(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: `3 ${I18n.t('title.of')} 4`,
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
      Navigation.push(this.props.componentId, {
        component: {
          name: `${NAMEAPP}.usersetuproom`,
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

  multiSliderValuesChange = values => {
    this.setState({
      multiSliderValue: values
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
              <Text style={styles.textHeader}>34,169</Text>
              <Text center style={styles.txtTop}>
                {I18n.t('intro.labelTopS4')}
              </Text>
              <View style={styles.spector}/>
              <Text center style={styles.txtMid}>
                {I18n.t('intro.labelTopS5')}
              </Text>

              <View style={styles.containerPrice}>
                <Text style={styles.txtPrice}>
                  {this.state.multiSliderValue[0]} tỷ
                </Text>
                <Text style={styles.txtPrice}>
                  {this.state.multiSliderValue[1]} tỷ
                </Text>
              </View>
              <View style={styles.triangleView}/>

              <MultiSlider
                selectedStyle={{
                  backgroundColor: 'white',
                  height: 4
                }}
                unselectedStyle={{
                  backgroundColor: 'silver'
                }}
                values={[
                  this.state.multiSliderValue[0],
                  this.state.multiSliderValue[1]
                ]}
                sliderLength={280}
                onValuesChange={this.multiSliderValuesChange}
                min={0}
                max={100}
                step={1}
                allowOverlap
                snapped
              />
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
  containerPrice: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: c.contants.white,
    width: c.contants.widthDevice / 2,
    borderRadius: 6
  },
  triangleView: {
    borderTopWidth: c.contants.widthDevice / 40,
    borderRightWidth: c.contants.widthDevice / 30 / 2.0,
    borderBottomWidth: 0,
    borderLeftWidth: c.contants.widthDevice / 30 / 2.0,
    borderTopColor: c.contants.white,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent'
  },
  txtPrice: {
    fontSize: 13,
    color: c.contants.primaryColor,
    marginBottom: 10,
    marginTop: 10
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
)(UserSetupPrice);
