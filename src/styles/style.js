import { Dimensions, Platform, StyleSheet } from "react-native";
import { colors } from "./color";

export const StyleGlobal = {
    isLansacpeFirst: false,
};

export const versionIOS =
    Platform.OS == 'ios' && parseInt(Platform.Version, 10) < 14; //--IOS < 14 lanscape bị ngược

export const nwidth = () =>
    StyleGlobal.isLansacpeFirst && versionIOS
        ? Dimensions.get('window').height
        : Dimensions.get('window').width;
export const nheight = () =>
    StyleGlobal.isLansacpeFirst && versionIOS
        ? Dimensions.get('window').width
        : Dimensions.get('window').height;

export const Width = (num: number) => nwidth() * (num / 100);
export const Height = (num: number) => nheight() * (num / 100);

export const nstyles = StyleSheet.create({
    containerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    }
})