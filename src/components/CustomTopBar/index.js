const React = require('react');
const {Component} = require('react');
const {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert
} = require('react-native');
import {connect} from 'react-redux';
const {Navigation} = require('react-native-navigation');

class CustomTopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.subscription = Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    console.log('RNN', 'CTB.componentDidAppear');
  }

  componentDidDisappear() {
    console.log('RNN', `CTB.componentDidDisappear`);
  }

  componentDidMount() {
    console.log('RNN', `CTB.componentDidMount`);
  }

  componentWillUnmount() {
    console.log('RNN', `CTB.componentWillUnmount`);
    this.subscription.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => Alert.alert(this.props.title, 'Thanks for that :)')}
        >
          <Text style={styles.text}>Press Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// module.exports = CustomTopBar;
export default connect(
  null,
  null,
  null,
  {withRef: true}
)(CustomTopBar);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    // position: 'absolute',
    zIndex: 10000,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center',
    color: 'black'
  }
});
