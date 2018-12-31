import I18n from 'react-native-i18n';
import en from './en';
import vn from './vn';

I18n.fallbacks = true;
I18n.translations = {vn, en};
I18n.locale = 'vn';

export default I18n;
