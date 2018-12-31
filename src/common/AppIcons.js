// Define all your icons once,
// load them once,
// and use everywhere

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {contants} from '../contants/index';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'ios-person': [30, '#bbb'],
  'ios-person--big': [50, '#bbb'],

  'ios-person--active': [30, '#fff'],
  'ios-person--active--big': [50, '#fff'],
  'ios-person--active--very-big': [100, '#fff'],

  'ios-people': [30, '#bbb'],
  'ios-people--active': [30, '#fff'],

  'ios-keypad': [30, '#bbb'],
  'ios-keypad--active': [30, '#fff'],

  'ios-chatbubbles': [30, '#bbb'],
  'ios-chatbubbles--active': [30, '#fff'],

  'md-chatboxes': [25, '#fff'],
  'ios-chatboxes-outline': [25, '#fff'],

  'th-list': [20, contants.primaryColor, FontAwesome],
  'align-justify': [20, contants.colorBlack, FontAwesome],

  'search--active': [30, contants.primaryColor, EvilIcons],
  search: [30, contants.borderColor, EvilIcons],

  'retweet--active': [30, contants.primaryColor, EvilIcons],
  retweet: [30, contants.borderColor, EvilIcons],

  'heart--active': [30, contants.primaryColor, EvilIcons],
  heart: [30, contants.borderColor, EvilIcons],

  'home--active': [20, contants.primaryColor, SimpleLineIcons],
  home: [20, contants.borderColor, SimpleLineIcons],

  'ios-more--active': [20, contants.primaryColor, Ionicons],
  'ios-more': [20, contants.borderColor, Ionicons],

  bell: [20, contants.primaryColor, FontAwesome],
  'bell-o': [20, contants.colorBlack, FontAwesome],

  'pencil-square-o': [20, contants.primaryColor, FontAwesome],
  pencil: [20, contants.colorBlack, FontAwesome],

  'folder-open': [20, contants.primaryColor, FontAwesome],
  'folder-o': [20, contants.colorBlack, FontAwesome],

  'envelope-open': [20, contants.primaryColor, FontAwesome],
  'envelope-open-o': [20, contants.colorBlack, FontAwesome],

  'user-circle-o': [20, contants.primaryColor, FontAwesome],
  'user-circle': [20, contants.colorBlack, FontAwesome],

  'map-o': [18, contants.colorBlack, FontAwesome],
  'list-ul': [18, contants.colorBlack, FontAwesome],
  filter: [20, contants.colorBlack, FontAwesome],

  cog: [22, contants.colorBlack, FontAwesome],
  edit: [22, contants.colorBlack, FontAwesome],

  // Use other Icon provider, see the logic at L39
  '.facebook': [30, '#bbb', FontAwesome],
  'facebook--active': [30, '#fff', FontAwesome]
};

const defaultIconProvider = Ionicons;

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      );
    })
  ).then(sources => {
    Object.keys(icons).forEach((iconName, idx) => {
      iconsMap[iconName] = sources[idx];
    });

    // Call resolve (and we are done)
    resolve(true);
  });
});

export {iconsMap, iconsLoaded};
