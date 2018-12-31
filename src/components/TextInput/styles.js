import {StyleSheet} from 'react-native';

const INPUT_HEIGHT = 48;
const INPUT_HEIGHT_BASE = 44;

export default StyleSheet.create({
  container: {
    width: '100%',
    height: INPUT_HEIGHT,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.75)'
  },
  icon: {
    width: 16,
    height: 16,
    position: 'absolute',
    marginLeft: 5,
    resizeMode: 'contain'
  },
  textinput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 9.3,
    letterSpacing: 0.13,
    color: 'rgba(255, 255, 255, 0.75)'
  },
  containerBase: {
    width: '100%',
    height: INPUT_HEIGHT_BASE,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white'
  },
  textinputBase: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
    // paddingVertical: 8,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal'
    // color: 'rgba(255, 255, 255, 0.75)'
  }
});
