import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  Platform
} from "react-native";
import { View, Assets, Text, Badge, Colors, Card } from "react-native-ui-lib";
import Swiper from "react-native-swiper";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import _ from "lodash";

import { I18n, c } from "../../../common";

Assets.loadAssetsGroup("icons", {
  backgroundImage: require("../../../assets/banner-night.png")
});

import * as HOC from "../../../HOCs";

// const DimissKeyboard = HOC.DismissKeyboardHOC(View);
const FullScreenNetStatusHOC = HOC.FullScreenNetStatusHOC(View);
const NUMBER_OF_COLUMNS = 2;
const GUTTER_SIZE = 24;

/**
 * handle bussines logic here, check userdata > render author or render unauthor
 */

class TabUpdateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      list: [
        {
          id: 1,
          name: "Sheet Piles",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image:
            "https://5.imimg.com/data5/EG/IP/MY-1507818/galvanized-steel-piles-500x500.jpg"
        },
        {
          id: 2,
          name: "Pipes",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image:
            "https://5.imimg.com/data5/FE/NG/MY-9485181/lohia-stainless-steel-pipes-500x500.jpg"
        },
        {
          id: 3,
          name: "Beams",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image: "https://i.ytimg.com/vi/1hQWjrWgdwc/maxresdefault.jpg"
        },
        {
          id: 4,
          name: "Cranes",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image:
            "https://www.leveldevelopments.com/wp/wp-content/uploads/mobile-crane-inclinometers-levels.jpg"
        },
        {
          id: 5,
          name: "Sheet Piles",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Well_spudder_8606.jpg"
        },
        {
          id: 6,
          name: "Sheet Piles",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Well_spudder_8606.jpg"
        },
        {
          id: 7,
          name: "Sheet Piles",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Well_spudder_8606.jpg"
        },
        {
          id: 8,
          name: "Sheet Piles",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Well_spudder_8606.jpg"
        },
        {
          id: 9,
          name: "Sheet Piles",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Well_spudder_8606.jpg"
        },
        {
          id: 10,
          name: "Sheet Piles",
          provider: "Provider",
          numberPost: 100,
          numberNews: 12,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/59/Well_spudder_8606.jpg"
        }
      ]
    };
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      bottomTabs: {
        backgroundColor: "#EC2F34",
        titleDisplayMode: "alwaysShow"
      },
      topBar: {
        visible: false,
        drawBehind: true
      },
    };
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "btnBack") {
      Navigation.pop(this.props.componentId);
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
        style={{ backgroundColor: "#404247" }}
      >
        <View
          style={{
            height: c.contants.heightDevice / 8,
            marginTop: Platform.OS === "ios" ? 20 : 0
          }}
        >
          <Swiper
            style={styles.wrapper}
            // height={200}
            paginationStyle={{ bottom: 0 }}
            autoplay
          >
            <View style={styles.slide1}>
              {/* <Text style={styles.text}>Hello Swiper</Text> */}
              <Image
                style={{
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain"
                }}
                source={{
                  uri:
                    "https://www.birmingham.ac.uk/Images/Students/Accommodation/web-images/banner-downloadaccomapp.jpg"
                }}
              />
            </View>
            <View style={styles.slide2}>
              <Image
                style={{
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain"
                }}
                source={{
                  uri:
                    "https://cdn.vigyanix.com/site/wp-content/uploads/building-mobile-app-banner-image.png"
                }}
              />
            </View>
            <View style={styles.slide3}>
              <Image
                style={{
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  resizeMode: "contain"
                }}
                source={{
                  uri:
                    "https://developmenttrends.files.wordpress.com/2015/10/oyo-app-banner.jpg"
                }}
              />
            </View>
          </Swiper>
        </View>
        <View
          style={{
            backgroundColor: "#404247",
            height: c.contants.heightDevice / 6,
            paddingHorizontal: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20

              // paddingHorizontal: 10
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: c.contants.white
              }}
            >
              Steel Market
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View style={{ marginRight: 15 }}>
                <Entypo name="mail" size={23} color={c.contants.white} />
                <View style={{ position: "absolute", right: -10, top: -8 }}>
                  <Badge
                    size="small"
                    label={"1"}
                    borderWidth={1}
                    borderColor={Colors.white}
                    backgroundColor={Colors.red30}
                  />
                </View>
              </View>

              <Ionicons name="md-options" size={20} color={c.contants.white} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              height: 40,
              marginTop: 10,
              justifyContent: "center"
            }}
          >
            <TextInput
              underlineColorAndroid={"transparent"}
              placeholder="Try search"
              style={{ flex: 1, paddingHorizontal: 10, marginRight: 10, height: '100%' }}
            />
            <Ionicons
              name="md-search"
              size={20}
              color={"grey"}
              style={{ position: "absolute", right: 10 }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 48,
            alignItems: "center",
            backgroundColor: "white",
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "black",
              marginRight: 20
            }}
          >
            All
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#BDBFC4",
              marginRight: 20
            }}
          >
            SteelMaterial
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#BDBFC4",
              marginRight: 20
            }}
          >
            Machinery
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white"
          }}
        >
          <FlatList
            style={{ flex: 1 }}
            data={this.state.list}
            style={{
              marginHorizontal: 5,
              paddingHorizontal: 5
            }}
            columnWrapperStyle={{
              backgroundColor: "white"
            }}
            // horizontal={false}
            numColumns={NUMBER_OF_COLUMNS}
            extraData={this.state}
            renderItem={props => <GridListItem {...props} />}
            keyExtractor={item => item.id}
          />
        </View>
      </FullScreenNetStatusHOC>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },

  image: {
    width: c.contants.widthDevice,
    flex: 1
  }
});

const GridListItem = ({ item, index }) => {
  const itemSize =
    (c.contants.widthDevice - GUTTER_SIZE * (NUMBER_OF_COLUMNS + 1)) /
    NUMBER_OF_COLUMNS;
  return (
    <Card
      flex
      marginL-10
      marginR-10
      marginT-10
      marginB-10
      borderRadius={0}
      elevation={3}
    >
      <View height={itemSize / 2} bg-dark80>
        <Image style={{ flex: 1 }} source={{ uri: item.image }} />
      </View>
      <View paddingT-10 paddingL-10 paddingR-10 paddingB-10>
        <Text text90 dark20 numberOfLines={1} style={{ fontWeight: "bold" }}>
          {item.name}
        </Text>
        <Text text95 dark40 marginT-5>
          {item.provider}
        </Text>
        <View style={{ flexDirection: "row" }} marginT-7>
          <Text text100 dark40>
            ({item.numberPost} posts)
          </Text>
          <Text text100 red40 marginL-5>
            {item.numberNews} news
          </Text>
        </View>
      </View>
    </Card>
  );
};

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
)(TabUpdateScreen);
