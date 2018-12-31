import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import { View, Assets, Text, Colors } from "react-native-ui-lib";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import _ from "lodash";

import { I18n, c } from "../../../common";

Assets.loadAssetsGroup("icons", {
  backgroundImage: require("../../../assets/banner-night.png")
});

import * as HOC from "../../../HOCs";
import { NAMEAPP } from "../../../config/strings";

// const DimissKeyboard = HOC.DismissKeyboardHOC(View);
const FullScreenNetStatusHOC = HOC.FullScreenNetStatusHOC(View);

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
        visible: false,
        drawBehind: true
      },
      bottomTabs: {
        backgroundColor: "#EC2F34",
        titleDisplayMode: "alwaysShow"
      }
    };
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "btnBack") {
      // Navigation.pop(this.props.componentId);
    } else if (buttonId === "btnNext") {
      //
    }
  }

  componentDidMount() {}

  render() {
    return (
      <FullScreenNetStatusHOC
        flex
        // center
        statusNetwork={iconnect => {
          console.log(iconnect);
        }}
      >
        <View
          style={{
            backgroundColor: "#404247",
            // height: c.contants.heightDevice / 4.5,
            paddingHorizontal: 15,
            paddingBottom: 20
          }}
        >
          <View
            style={{
              height: c.contants.heightDevice / 18,
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            <Ionicons name="ios-settings" size={20} color={"white"} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: "700",
                  color: "white"
                }}
              >
                Account
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "500",
                  color: "white"
                }}
              >
                Hi, Mr.Alex
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                height: 30
              }}
            >
              <Feather
                name="help-circle"
                size={10}
                color="white"
                style={{ position: "absolute", top: 3, left: 3 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  marginHorizontal: 15
                }}
              >
                Actived
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 48,
            alignItems: "center",
            backgroundColor: "white",
            paddingHorizontal: 15,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: "#F2F2F2"
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#BDBFC4",
              marginRight: 20
            }}
          >
            General
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#BDBFC4",
              marginRight: 20
            }}
          >
            Order
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#BDBFC4",
              marginRight: 20
            }}
          >
            My Product
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,

              color: "black",
              marginRight: 20
            }}
          >
            Help
          </Text>
        </View>

        <View
          style={{
            paddingTop: 25,
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,

              color: "black"
            }}
          >
            Help
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#F2F2F2",
              borderRadius: 10,
              // height: c.contants.heightDevice / 4
              padding: 15,
              marginTop: 10
            }}
          >
            <View>
              <Text
                style={{ fontSize: 14, color: Colors.dark20, marginBottom: 5 }}
              >
                Name{" "}
              </Text>
              <Text
                style={{ fontSize: 14, color: Colors.dark20, marginBottom: 5 }}
              >
                Phonenumber{" "}
              </Text>
              <Text
                style={{ fontSize: 14, color: Colors.dark20, marginBottom: 5 }}
              >
                Email{" "}
              </Text>
              <Text style={{ fontSize: 14, color: Colors.dark20 }}>
                Address{" "}
              </Text>
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text
                style={{ fontSize: 14, color: Colors.dark20, marginBottom: 5 }}
              >
                Alexander Hamilton{" "}
              </Text>
              <Text
                style={{ fontSize: 14, color: Colors.dark20, marginBottom: 5 }}
              >
                +254567899000{" "}
              </Text>
              <Text
                style={{ fontSize: 14, color: Colors.dark20, marginBottom: 5 }}
              >
                alexander@gmail.com{" "}
              </Text>
              <Text style={{ fontSize: 14, color: Colors.dark20 }}>
                #101, 2840 2 Ave SE, Calgary{" "}
              </Text>
            </View>
          </View>
        </View>
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
  { withRef: true }
)(TabMoreScreen);
