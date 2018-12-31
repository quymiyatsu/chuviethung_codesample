import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
  StyleSheet,
  ImageBackground,
  TextInput,
  StatusBar
} from "react-native";
import { View, Assets, Text, Card } from "react-native-ui-lib";
import _ from "lodash";
import MapView, { Marker } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import { Header } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

import { I18n, c } from "../../../common";
import { NAMEAPP } from "../../../config/strings";
import AnimatedView from "./AnimatedView";

Assets.loadAssetsGroup("icons", {
  backgroundImage: require("../../../assets/banner-night.png")
});

import * as HOC from "../../../HOCs";

// const DimissKeyboard = HOC.DismissKeyboardHOC(View);
const FullScreenNetStatusHOC = HOC.FullScreenNetStatusHOC(View);

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class TabSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      selectedIndex: 0,
      filteredMarkers: [
        {
          id: 0,
          amount: 99,
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
          urlImage:
            "https://room-matehotels.com/images/img/general/slide_inicio/slide_01.jpg"
        },
        {
          id: 1,
          amount: 199,
          coordinate: {
            latitude: LATITUDE + 0.004,
            longitude: LONGITUDE - 0.004,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
          urlImage:
            "https://www.peninsulaexcelsior.com.sg/cache/e5/eb/e5ebedb9fd0a967c95b1c26ee472e2e1.jpg"
        },
        {
          id: 2,
          amount: 285,
          coordinate: {
            latitude: LATITUDE - 0.004,
            longitude: LONGITUDE - 0.004,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
          urlImage:
            "https://q-xx.bstatic.com/images/hotel/max1024x768/957/95798203.jpg"
        }
      ]
    };
    // Navigation.events().bindComponent(this);
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

  _centerMapOnMarker(markerIndex) {
    const mapRef = this.mapRef;
    const markerData = this.state.filteredMarkers[markerIndex];

    if (!markerData || !mapRef) {
      return;
    }
    mapRef.animateToRegion(markerData.coordinate);
  }

  _renderSwiperItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.slide}>
        <ImageBackground
          style={{
            height: ((c.contants.heightDevice / 3) * 2) / 3
            // backgroundColor: "green"
          }}
          source={{ uri: item.urlImage }}
        >
          <View
            style={{
              backgroundColor: c.contants.blurSilver,
              position: "absolute"
            }}
          >
            <Text
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
                fontSize: 12,
                color: c.contants.white
              }}
            >
              $20.000 (Jun 30)
            </Text>
          </View>
        </ImageBackground>
        <View padding-10>
          <View row style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 20,
                backgroundColor: "red",
                marginRight: 5
              }}
            />
            <Text
              style={{
                color: c.contants.blackTitle,
                fontSize: 12,
                fontWeight: "bold"
              }}
            >
              Condo for sale
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: c.contants.blackTitle,
              fontWeight: "bold"
            }}
          >
            $450,000{" "}
            <Text
              style={{
                fontSize: 14,
                fontWeight: "normal",
                color: c.contants.silver
              }}
            >
              1bd 1ba 625 sqft
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "normal",
              color: c.contants.silver
            }}
          >
            212 S Oxford St APT 3H, Brooklyn, NY
          </Text>
        </View>
      </View>
      // <View style={styles.slide}>
      //   <Text style={styles.title}>{item.title}</Text>
      // </View>
    );
  };

  render() {
    return (
      <FullScreenNetStatusHOC
        flex
        // center
        statusNetwork={iconnect => {
          // console.log(iconnect);
        }}
      >
        <MapView
          ref={mapRef => (this.mapRef = mapRef)}
          style={{
            flex: 1
            // backgroundColor: "red"
          }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {this.state.filteredMarkers.map((marker, i) => {
            return (
              <Marker
                key={marker.id}
                coordinate={marker.coordinate}
                pinColor={
                  i === this.state.selectedIndex
                    ? c.contants.primaryColor
                    : "red"
                }
              >
                {/* <View>
                  <Text>{marker.amount}</Text>
                </View> */}
              </Marker>
            );
          })}
        </MapView>
        <View style={styles.containerOverlay}>
          <Carousel
            data={this.state.filteredMarkers}
            renderItem={this._renderSwiperItem.bind(this)}
            sliderWidth={c.contants.widthDevice}
            itemWidth={(c.contants.widthDevice * 8) / 10}
            // removeClippedSubviews={false}
            onSnapToItem={(index, marker) => {
              // console.log(index);
              // console.log(this.state.filteredMarkers.length);
              this.setState({ selectedIndex: index });
              this._centerMapOnMarker(index);
              if (index + 1 === this.state.filteredMarkers.length) {
                this.state.filteredMarkers.push({
                  id: index + 1,
                  amount: 285,
                  coordinate: {
                    latitude: LATITUDE - 0.0884 * (index + 1),
                    longitude: LONGITUDE - 0.0974 * (index + 1),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  },
                  urlImage:
                    "https://q-xx.bstatic.com/images/hotel/max1024x768/957/95798203.jpg"
                });
                console.log("new state", this.state.filteredMarkers);
              }
            }}
          />
        </View>
        {/* <AnimatedView /> */}
      </FullScreenNetStatusHOC>
    );
  }
}

const styles = StyleSheet.create({
  containerOverlay: {
    position: "absolute",
    bottom: 5,
    // backgroundColor: "red",
    width: c.contants.widthDevice
  },
  slide: {
    // height: c.contants.heightDevice / 4,
    // width: c.contants.widthDevice / 2,
    width: "100%",
    backgroundColor: c.contants.white
  },
  title: {
    fontSize: 12
  }
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
  { withRef: true }
)(TabSearchScreen);
