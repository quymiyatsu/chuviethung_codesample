import {store} from '../redux/store';
import {registerScreen} from '../HOCs';
import {Navigation} from 'react-native-navigation';
import {NAMEAPP} from './strings';
import LoadingScreen from '../screens/Loading';
import LoginScreen from '../screens/LoginScreen';
import IntroSetupScreen from '../screens/IntroSetupScreen';
import UserSetupLocation from '../screens/IntroSetupScreen/UserSetupLocation';
import UserSetupPrice from '../screens/IntroSetupScreen/UserSetupPrice';
import UserSetupRoom from '../screens/IntroSetupScreen/UserSetupRoom';
import TabMoreScreen from '../screens/TabMainScreen/TabMoreScreen';
import TabSaveHomeScreen from '../screens/TabMainScreen/TabSaveHomeScreen';
import TabSearchScreen from '../screens/TabMainScreen/TabSearchScreen';
import TabUpdateScreen from '../screens/TabMainScreen/TabUpdateScreen';
import TabYourHomeScreen from '../screens/TabMainScreen/TabYourHomeScreen';

import CustomTopBar from '../components/CustomTopBar';
// import SceenBScreen from '../screen/ScreenB';

function registerScreens() {
  Navigation.registerComponent(`${NAMEAPP}.loadingscreen`, () =>
    registerScreen(LoadingScreen, store)
  );
  Navigation.registerComponent(`${NAMEAPP}.loginscreen`, () =>
    registerScreen(LoginScreen, store)
  );
  Navigation.registerComponent(`${NAMEAPP}.introsetupscreen`, () =>
    registerScreen(IntroSetupScreen, store)
  );
  Navigation.registerComponent(`${NAMEAPP}.usersetuplocation`, () =>
    registerScreen(UserSetupLocation, store)
  );
  Navigation.registerComponent(`${NAMEAPP}.usersetupprice`, () =>
    registerScreen(UserSetupPrice, store)
  );
  Navigation.registerComponent(`${NAMEAPP}.usersetuproom`, () =>
    registerScreen(UserSetupRoom, store)
  );

  //tab regis screen
  Navigation.registerComponent(`${NAMEAPP}.tabmorescreen`, () =>
    registerScreen(TabMoreScreen, store)
  );
  Navigation.registerComponent(`${NAMEAPP}.tabsavehomescreen`, () =>
    registerScreen(TabSaveHomeScreen, store)
  );
  Navigation.registerComponent(`${NAMEAPP}.tabsearchscreen`, () =>
    registerScreen(TabSearchScreen, store)
  );
  Navigation.registerComponent(`${NAMEAPP}.tabupdatescreen`, () =>
    registerScreen(TabUpdateScreen, store)
  );
  Navigation.registerComponent(`${NAMEAPP}.tabyourhomescreen`, () =>
    registerScreen(TabYourHomeScreen, store)
  );

  //custom tabbar
  Navigation.registerComponent(`${NAMEAPP}.customtopbar`, () =>
    registerScreen(CustomTopBar, store)
  );
}
module.exports = {registerScreens};
