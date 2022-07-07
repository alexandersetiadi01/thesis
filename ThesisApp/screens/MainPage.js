import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/build/Camera.types';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MainPage({navigation}) {

  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setimage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [objects, setObject] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/API/getObjectProperties/object/', {
      method: 'GET'
    }).then( res => res.json()).then(jsonRes => setObject(jsonRes)).catch( error => console.log(error));
  }, []);

  const [start, setStart] = useState(false);

  useEffect(() => {
    (async() => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const starting = () =>{
    setStart(true)
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

  return (
   
    <View style={{flex: 1}}>
      {/* <Button color={'red'} title="stop" onPress={() => navigation.navigate('Learning Things')}/> */}
      <View style={styles.cameraContainer}>
        <Camera ref={ref => setCamera(ref)} style={styles.fixedRatio} type={type} ratio={'1:1'}/>
      </View>
      <TouchableOpacity>
        <View style={styles.btn}>
          <Ionicons name="camera-reverse-sharp" size={25} color="white" onPress={ () => {
          setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}}>
          Flip Camera</Ionicons>
        </View>
      
      {/* <Button style={styles.btn} title="Flip Camera" 
      onPress={ () => {
        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}}>
      </Button> */}
      </TouchableOpacity>
      <TouchableOpacity>
      {/* <Button style={styles.btn} color={'green'} title='Take Picture' onPress={() => takePicture()}/> */}
      <View style={styles.camerabtn}>
        <Ionicons name="camera" size={25} color="white" onPress={() => takePicture()}>take picture</Ionicons>
        
      </View>
      
      </TouchableOpacity>

      {image && <Image source={{uri: image}} style={{flex: 1}}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  fixedRatio: {
    flex: 1, 
    aspectRatio: 1
  },
  btn:{
    fontSize: 20,
    //margin: 10,
    backgroundColor: 'blue',
    borderColor: 'black',
    alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column'
  },
  camerabtn:{
    fontSize: 20,
    // marginLeft: 10,
    // marginRight: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column'
  },
});
