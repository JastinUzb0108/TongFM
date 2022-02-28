import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const AlertTitle = () => {
    Alert.alert(
        "Software authors",
        '* Salimov Mirzohid Muxammadjon o\'g\'li \n* Nurbek Nuraliyev Rustamjon o\'g\'li \n* Hasanov Jasur Ulug\'bek o\'g\'li \n* Saida Beknazarova Safibullayevna',
        [
            {
                text: "Ok",
                onPress: () => console.log("Ask me later pressed")
            },
        ])
}

export default function TopDsigin({ navigation }) {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.bottomStyle}>TONG FM</Text>

            <FontAwesome
                name='info-circle'
                color='#91A1BD'
                size={40}
                onPress={AlertTitle}
                style={{
                    position: 'absolute',
                    top: 10,
                    left: 10
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    bottomStyle: {
        textShadowColor: '#B7C4EE',
        textShadowOffset: {
            width: 4,
            height: 4
        },
        fontSize: 44,
        fontWeight: 'bold',
        textShadowRadius: 10,
        color: '#93A3BD',
    },
})
