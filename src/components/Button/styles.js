import {StyleSheet} from 'react-native';
import {contants} from '../../contants';

const BUTTON_HEIGHT = 40;

export default StyleSheet.create({
  container: {
    width: '100%',
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bdf2',
    borderRadius: 4,
    marginVertical: 11
  },
  containerBorder: {
    marginVertical: 11,
    width: '100%',
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00bdf2',
    borderRadius: 4,
    borderStyle: 'solid'
  },
  buttonText: {
    fontSize: 16,
    margin: 2,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#ffffff'
  },
  buttonTextBorder: {
    fontSize: 16,
    margin: 2,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#00bdf2'
  },
  containerBtnIcon: {
    width: '100%',
    height: 48,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.75)'
  },
  iconBtnIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    marginLeft: 5,
    resizeMode: 'contain'
  },
  txtContainerBtnIcon: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
    marginLeft: 20,
    justifyContent: 'center'
  },
  textBtnIcon: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: 'rgba(255, 255, 255, 0.75)'
  },
  containerBtnIconFill: {
    minWidth: contants.widthDevice / 3,
    height: 38,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bdf2',
    borderRadius: 4,
    marginVertical: 11
  },
  iconBtnIconFill: {
    width: 20,
    height: 20,
    marginLeft: 10,
    position: 'absolute',
    resizeMode: 'contain'
  },
  txtContainerBtnIconFill: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
    justifyContent: 'center'
  },
  textBtnIconFill: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.75)'
  }
});
