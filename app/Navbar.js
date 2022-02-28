import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet, TouchableOpacity, View, Share, Linking } from 'react-native'
import { Audio } from 'expo-av';
import { MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons'
import ControllerFunction from './ControllerFunction';

export default function Navbar() {
    const [sound, setSound] = useState()
    const [volumeIcon, setVolumeIcon] = useState(true)
    let volume = 1.0
    const gray = '#91A1BD'
    const volumeValue = volumeIcon ? 'volume-up' : 'volume-mute'
    const telegramUrl = "https://t.me/tongfm";
    const telUrl = "tel:+998974112724";
    const telegramGroupUrl = "https://t.me/tongfmchat";

    async function playSound() {
        console.log('Loading Sound')
        try {
            const audioMode = {
                playsInSilentModeIOS: true,
                allowsRecordingIOS: false,
                staysActiveInBackground: true,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                shouldDuckAndroid: false,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                playThroughEarpieceAndroid: false,

            };

            await Audio.setAudioModeAsync(audioMode);

            const { sound } = await Audio.Sound.createAsync(
                {
                    uri: 'https://listen.myrh.ru/id052153'
                })

            setSound(sound)
            console.log('Playing Sound');

            await sound.playAsync()
            await sound.setVolumeAsync(volume)

        } catch (err) {
            Alert.alert('Internetga ulanishda muammo', 'Iltimos internetga ulanish sifatini tekshiring', [
                {
                    text: 'Ok',
                    onPress: () => playSound(),
                    style: 'destructive'
                }
            ])
        }
    }

    async function permesionAv() {
        Audio.requestPermissionsAsync()
        .then(status => {
            console.log(status);
        })
        .catch((err) => {
            console.log(err);
        }) 
    }

    useEffect(() => {
        playSound()
        permesionAv()
    }, [])

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'http://tongfm.uz/',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
            // Checking if the link is supported for links with custom URL scheme.
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                // by some browser in the mobile
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);

        return <TouchableOpacity activeOpacity={0.4} onPress={handlePress} >{children}</TouchableOpacity>
    };

    const volumeController = async () => {
        setVolumeIcon(!volumeIcon)
        volume = volumeIcon ? 0.0 : 1.0
        await sound.setVolumeAsync(volume)
    }

    return (
        <View style={styles.container}>
            <ControllerFunction>
                <OpenURLButton url={telUrl} >
                    <MaterialIcons name='call' size={34} color={gray} />
                </OpenURLButton>
            </ControllerFunction>

            <ControllerFunction>
                <OpenURLButton url={telegramUrl} >
                    <FontAwesome5 name="telegram-plane" size={34} color={gray} />
                </OpenURLButton>
            </ControllerFunction>

            <ControllerFunction>
                <OpenURLButton url={telegramGroupUrl}>
                    <MaterialIcons name='group' size={34} color={gray} />
                </OpenURLButton>
            </ControllerFunction>

            <ControllerFunction>
                <TouchableOpacity onPress={onShare} activeOpacity={0.4} >
                    <FontAwesome name="link" size={34} color={gray} />
                </TouchableOpacity>
            </ControllerFunction>

            <ControllerFunction>
                <TouchableOpacity activeOpacity={0.4} onPress={volumeController} >
                    <FontAwesome5 name={volumeValue} size={34} color={gray} />
                </TouchableOpacity>
            </ControllerFunction>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
})
