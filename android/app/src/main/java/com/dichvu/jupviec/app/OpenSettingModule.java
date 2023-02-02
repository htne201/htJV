package com.dichvu.jupviec.app;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.provider.Settings;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class OpenSettingModule extends ReactContextBaseJavaModule {

    Context context;
    public  OpenSettingModule(ReactApplicationContext context){
        super(context);
        this.context=context;
    }
    @NonNull
    @Override
    public String getName() {
        return "OpenSetting";
    }
    @ReactMethod
    public  void openSetting(String url){
        Activity currentActivity = getCurrentActivity();
        Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
        Uri uri = Uri.fromParts("package", url, null);
        intent.setData(uri);
        currentActivity.startActivity(intent);
    }
}
