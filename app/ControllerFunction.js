import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function ControllerFunction({ children, size, style }) {
    return (
        <View style={styles.topShadow}>
            <View style={styles.bottomShadow}>
                <View style={[
                    styles.inner,
                    {
                        width: size || 55,
                        height: size || 55,
                        borderRadius: size / 2 || 60 / 2
                    }, style
                ]}>
                    {children}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inner: {
        backgroundColor: '#DEE9F7',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#E2ECFD',
        borderWidth: 1
    },
    topShadow: {
        shadowOffset: {
            width: -2,
            height: -2
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#B7C4FF',
        elevation: 20,
    },
    bottomShadow: {
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#B7C4FF',
        elevation: 20,
    }
})
