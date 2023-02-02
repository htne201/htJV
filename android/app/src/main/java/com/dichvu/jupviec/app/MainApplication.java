package com.dichvu.jupviec.app;

import android.app.Application;
import android.content.Context;
import android.content.Intent;
import androidx.multidex.MultiDex;

import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.modules.network.OkHttpClientProvider;
import com.google.android.gms.common.GooglePlayServicesUtil;
import com.google.android.gms.security.ProviderInstaller;

import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.CallbackManager;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;

import com.google.gson.Gson;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.react.ReactInstanceManager;
import java.lang.reflect.InvocationTargetException;

import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private static MainApplication mSelf;
    private Gson mGSon;
    private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

    protected static CallbackManager getCallbackManager() {
        return mCallbackManager;
    }
    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {


    
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            @SuppressWarnings("UnnecessaryLocalVariable")
            List<ReactPackage> packages = new PackageList(this).getPackages();
            // Packages that cannot be autolinked yet can be added manually here, for example:
            packages.add(new MapsPackage());
            packages.add(new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), MainApplication.this, BuildConfig.DEBUG));
            packages.add(new OpenSettingPackage());
            return packages;
        }
        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }
        
        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    public static MainApplication self() {
        return mSelf;
    }

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        upgradeSecurityProvider();
        mSelf = this;
        mGSon = new Gson();
        SoLoader.init(this, /* native exopackage */ false);
        OkHttpClientProvider.setOkHttpClientFactory(new CustomClientFactory());
        FacebookSdk.sdkInitialize(getApplicationContext());
        AppEventsLogger.activateApp(this);
        initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
    }

    /**
  * Loads Flipper in React Native templates. Call this in the onCreate method with something like
  * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  *
  * @param context
  * @param reactInstanceManager
  */
private static void initializeFlipper(
    Context context, ReactInstanceManager reactInstanceManager) {
  if (BuildConfig.DEBUG) {
    try {
      /*
        We use reflection here to pick up the class that initializes Flipper,
      since Flipper library is not available in release mode
      */
      Class<?> aClass = Class.forName("com.paht.ReactNativeFlipper");
      aClass
          .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
          .invoke(null, context, reactInstanceManager);
    } catch (ClassNotFoundException e) {
      e.printStackTrace();
    } catch (NoSuchMethodException e) {
      e.printStackTrace();
    } catch (IllegalAccessException e) {
      e.printStackTrace();
    } catch (InvocationTargetException e) {
      e.printStackTrace();
    }
  }
}

    private void upgradeSecurityProvider() {
        ProviderInstaller.installIfNeededAsync(this, new ProviderInstaller.ProviderInstallListener() {
            @Override
            public void onProviderInstalled() {

            }

            @Override
            public void onProviderInstallFailed(int errorCode, Intent recoveryIntent) {
                GooglePlayServicesUtil.showErrorNotification(errorCode, MainApplication.this);
            }
        });
    }

    public Gson getGSon() {
        return mGSon;
    }
}
