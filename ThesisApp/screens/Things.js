import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/build/Camera.types';
import { FontAwesome } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { AntDesign } from '@expo/vector-icons';

export default function Things({navigation}) {
    const word = "testing";

    return (
    // <View style={styles.container}>
    //   <Text>Learning Things</Text>
    //   <StatusBar style="auto" />
    // </View>

    
    <View style={styles.container}>
        <ScrollView>
        
            <TouchableOpacity onPress={() => Speech.speak('table')}>
            <View style={styles.box} > 
                <Image accessibilityLabel='table' style={styles.img} source={require('../assets/table.png')}/>
                {/* <FontAwesome name="microphone" size={35} color="white" onPress={() => Speech.speak('table')}> Table </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white" > Table </AntDesign>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => Speech.speak('chair')}>
            <View style={styles.box}>
                <Image accessibilityLabel='chair' style={styles.img} source={require('../assets/chair.jpg')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('chair')}> Chair </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white" > Chair </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('book')}>
            <View style={styles.box}>
                <Image accessibilityLabel='book' style={styles.img} source={require('../assets/book.png')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('book')}> Book </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white"> Book </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('bag')}>
            <View style={styles.box}>
                <Image accessibilityLabel='bag' style={styles.img} source={require('../assets/bag.jpg')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('bag')}> Bag </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white"> Bag </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('eraser')}>
            <View style={styles.box}>
                <Image accessibilityLabel='eraser' style={styles.img} source={require('../assets/eraser.png')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('eraser')}> Eraser </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white"> Eraser </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('pencil')}>
            <View style={styles.box}>
                <Image accessibilityLabel='pencil' style={styles.img} source={require('../assets/pencil.jpg')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('pencil')}> Pencil </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white"> Pencil </AntDesign>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => Speech.speak('pen')}>
            <View style={styles.box}>
                <Image accessibilityLabel='pen' style={styles.img} source={require('../assets/pen.jpg')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('pen')}> Pen </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white"> Pen </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('pencilcase')}>
            <View style={styles.box}>
                <Image accessibilityLabel='pencilcase' style={styles.img} source={require('../assets/pencilcase.jpg')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('pencilcase')}> PencilCase </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white"> Pencilcase </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('plate')}>
            <View style={styles.box}>
                <Image accessibilityLabel='plate' style={styles.img} source={require('../assets/plate.png')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('plate')}> Plate </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white"> Plate </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('spoon')}>
            <View style={styles.box}>
                <Image accessibilityLabel='spoon' style={styles.img} source={require('../assets/spoon.jpg')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('spoon')}> Spoon </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white"> Spoon </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('fork')}>
            <View style={styles.box}>
                <Image accessibilityLabel='fork' style={styles.img} source={require('../assets/fork.png')}/>
                {/* <FontAwesome name="microphone" size={35} color="white"onPress={() => Speech.speak('fork')}> Fork </FontAwesome> */}
                <AntDesign name="sound" size={35} color="white"> Fork </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('toothbrush')}>
            <View style={styles.box}>
                <Image accessibilityLabel='toothbrush' style={styles.img} source={require('../assets/toothbrush.jpg')}/>
                <AntDesign name="sound" size={35} color="white"> Toothbrush </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Speech.speak('toothpaste')}>
            <View style={styles.box}>
                <Image accessibilityLabel='toothpaste' style={styles.img} source={require('../assets/toothpaste.jpg')}/>
                <AntDesign name="sound" size={35} color="white"> Toothpaste </AntDesign>
            </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#519cd5',
      //justifyContent: 'center',
      flexDirection: 'column'
    },
    box: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
    img: {
        width: 150,
        height: 100,
        resizeMode: 'stretch',
        margin: 10
    },
    fixedRatio: {
      flex: 1, 
      aspectRatio: 1
    },
    btn:{
      margin: 30,
      fontSize: 20,
      borderRadius: 1000
    },
    text:{
      flex: 1,  
      fontSize: 40,
      margin: 30,
      color: 'white'
    }
 
});
  