package com.reactnativeinit;

import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.microsoft.codepush.react.CodePush;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.facebook.CallbackManager;
import com.reactnativenavigation.react.ReactGateway;
import com.wix.RNCameraKit.RNCameraKitPackage;
import com.wix.interactable.Interactable;
import com.airbnb.android.react.maps.MapsPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

    protected static CallbackManager getCallbackManager() {
        return mCallbackManager;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        AppEventsLogger.activateApp(this);
    }

//    @Override
//    protected ReactNativeHost createReactNativeHost() {
//        return new NavigationReactNativeHost(this) {
//            @Override
//            protected String getJSMainModuleName() {
//                return "index";
//            }
//        };
//    }

    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
            @javax.annotation.Nullable
            @Override
            protected String getJSBundleFile() {
                return CodePush.getJSBundleFile();
            }

        };
        return new ReactGateway(this, isDebug(), host);
    }


    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                new VectorIconsPackage(),
                new BlurViewPackage(),
                new RNI18nPackage(),
                new FastImageViewPackage(),
                new RNCameraKitPackage(),
                new PickerPackage(),
                new Interactable(),
                new MapsPackage(),
                new CodePush(null, getApplicationContext(), BuildConfig.DEBUG),
                new FBSDKPackage(mCallbackManager)
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
}
