import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function MainScreen() {
    return (
        <View style={styles.imgContainer}>
            <View style={styles.bottomBox}>
                <Image
                    source={
                        require('../assets/img/img5.png')
                    }
                    style={styles.imageForm}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    imageForm: {
        width: 360,
        height: 340,
        borderRadius: 10
    },
    bottomBox: {
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 10
    }
})
