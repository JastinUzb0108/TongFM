import React, { useEffect, useState } from "react";
import { StyleSheet, View, BackHandler, Alert } from 'react-native'

import MainScreen from './app/MainScreen'
import TopDsigin from './app/TopDsigin'
import Navbar from './app/Navbar'
export default function App() {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <TopDsigin />
      <MainScreen />
      <View style={styles.nav}>
        <Navbar />
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DEE9FD'
  },
  nav: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
})
