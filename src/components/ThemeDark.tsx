import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from 'react-native';

type ThemeProps = TouchableOpacityProps & {
    dark: boolean;
}

export function ThemeDark({dark , ...rest} : ThemeProps) {
    return (
        <TouchableOpacity
        style={dark ?  style.ButtonIsDark : style.Button}
            {...rest}
        >
            <Text style={style.ButtonText}>{dark ? '🌙' : '☀'}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    Button: {
        margin: 10 ,
        width: 40,
        height: 40,
        // backgroundColor: '#273FAD',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    ButtonText: {
        color: "#fff",
    },
    ButtonIsDark: {
        margin: 10 ,
        width: 40,
        height: 40,
        // backgroundColor: '#11193b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
})