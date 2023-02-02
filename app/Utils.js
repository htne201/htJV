import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationActions } from '@react-navigation/compat';

var _navigator = React.createRef();
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

// -- custom AynsStore
function ngetParam(nthis, keys, defaultValue) {
    if (nthis.props.route.params) {
        if (nthis.props.route.params.hasOwnProperty(keys) && nthis.props.route?.params[keys] != undefined && nthis.props.route?.params[keys] != null) {
            return nthis.props.route?.params[keys];
        } else {
            return defaultValue
        }
    } else {
        return defaultValue;
    }
}

//--Thông số cấu hình mặc
function nlog(...val) {
    if (__DEV__)
        console.log(...val);
}

function nlogError(...val) {
    if (__DEV__)
        console.error(...val);
}

// -- custom AynsStore
async function ngetStore(keys, defaultValue = null, app = 'app') {
    let temp = await AsyncStorage.getItem(app == '' ? keys : `@${app}@${keys}`);
    if (temp == null)
        return defaultValue;
    try {
        let tempValue = JSON.parse(temp);
        return tempValue;
    } catch (error) {
        return temp;
    }
}

async function nsetStore(keys, value, app = 'app') {
    if (typeof (value) !== 'string')
        value = JSON.stringify(value);
    await AsyncStorage.setItem(app == '' ? keys : `@${app}@${keys}`, value);
}
// --

// --navigation, [core] pass param on all of app
function goscreen(nthis, routeName, params = null) {
    try {
        if (params) {
            nthis.props.navigation.navigate(routeName,
                { ...params, lang: nthis.lang });
        } else {
            nthis.props.navigation.navigate(routeName,
                { lang: nthis.lang });
        };
    } catch (error) {
        _navigator.current?.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            }),
        );
    }
}

function goback(nthis, routeName = '') {
    try { //V5 khác V3 1 chút
        _navigator.current?.dispatch(NavigationActions.back());
    } catch (error) {
        // if (routeName == '')
        //     nthis.props.navigation.goBack();
        // else nthis.props.navigation.goBack(routeName);
    }
}

function navigate(routeName, params = {}) {
    // Utils.nlog("vao navigation", routeName, params, _navigator)
    try {
        _navigator.current?.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            }),
        );
    } catch (error) {
        nlogError(error);
    }

}
async function replace(nthis, routeName, params = {}) {
    try { // Cách call cũ từ V3
        if (params) {
            nthis.props.navigation.replace(routeName,
                { ...params, lang: nthis.lang });
        } else {
            nthis.props.navigation.replace(routeName,
                { lang: nthis.lang });
        };
    } catch (error) { // Cách call V5
        _navigator.current.dispatch(
            StackActions.replace(routeName, params)
        );
    }
}

//-------END---------
export default {
    //--riêng V5 
    replace, _navigator,
    //--Chung 
    setTopLevelNavigator, navigate,
    goscreen, nlog, goback, ngetStore, nsetStore, ngetParam, nlogError,
};
