import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/build/Camera.types';
import { ImageBackground, ScrollView } from 'react-native-web';
import Things from './Things';
import MainPage from './MainPage';

import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

export default function StartPage({navigation}) {

  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setimage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  const [start, setStart] = useState(false);

  const things = [
    {
      name: 'table',
      img: ''
    },
    {
      name: 'chair',
      img: ''
    },
    {
      name: 'pencil',
      img: ''
    },
    {
      name: 'eraser',
      img: ''
    },
  ]

  useEffect(() => {
    (async() => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const starting = () =>{
    setStart(true);
    navigation.navigate('MainPage');
  }

  const stop = () =>{
    setStart(false);
    navigation.navigate('Learning Things');
  }

  const takePicture = async() => {
    if(camera){
      const data = await camera.takePictureAsync(null)
      setimage(data.uri);
    }
  }

  if(cameraPermission === false){
    return <text>No Camera Access</text>;
  }

  const [objects, setObject] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/API/getObjectProperties/object/", {
      method: 'GET'
      // headers:{
      //   'Authorization': 'Token 6420363b9800a043a4e35dac674e1152b54f2593'
      // }
    }).then( (res) => res.json()).then((jsonRes) => setObject(jsonRes)).catch( (error) => console.error(error));
  }, []);

  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('lets search things!')}>

      
      <View style={styles.btn}>
      <FontAwesome name="play-circle" size={70} color="green">Play</FontAwesome> 
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("lets learn things!")}>
      <View style={styles.btn}>
      <FontAwesome name="book" size={70} color="blue" >Learn</FontAwesome>
      </View>
      </TouchableOpacity>

      
      <FlatList
            data={objects}
            renderItem={({ item }) => (
              <Text key={item.id} style={styles.text}>{item.name}</Text>
            )}
          />
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#ff6232', //orange
    backgroundColor: '#519cd5',//'#b20000' red, '#C21E56' ruby red
    justifyContent: 'center',
    flexDirection: 'column'
  },
  fixedRatio: {
    flex: 1, 
    aspectRatio: 1
  },
  btn:{
    margin: 30,
    fontSize: 20,
    borderRadius: 36,
    backgroundColor: '#ffbf00',
    shadowColor: '#303838',
    alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column'
  },
  text:{
    fontSize: 40
  }
 
});
