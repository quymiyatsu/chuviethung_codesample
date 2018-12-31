import {Navigation} from 'react-native-navigation';
import {registerScreens} from './config/registerScreens';
import {NAMEAPP} from './config/strings';

function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: `${NAMEAPP}.loadingscreen`,
                options: {
                  topBar: {
                    visible: false
                  },
                  animated: true
                }
              }
            }
          ]
        }
      }
    });
  });
}

module.exports = {
  start
};
