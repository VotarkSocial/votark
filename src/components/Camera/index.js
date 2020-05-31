import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera'; 
import styles from  './styles'
import TokenRefresh from '../TokenRefresh';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as selectors from '../../reducers'

const MyCamera = ({takePicture}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.mainContainer}>
        <Camera style={styles.camera} type={type} ref={ref => {
          setCameraRef(ref) ;
        }}>
          <View
            style={styles.container}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Image style={styles.icon} source={require('../../public/static/icon/frontal.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={async() => {
              if(cameraRef){
                let photo = await cameraRef.takePictureAsync();
                takePicture(photo)
              }
            }}>
              <View style={styles.pictureButton1}
              >
                <View style={styles.pictureButton2} >
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                 Actions.replace('Home')
              }}>
              <Image style={styles.icon} source={require('../../public/static/icon/close.png')} />
            </TouchableOpacity>
          </View>
        </Camera>
      <TokenRefresh/>
    </View>
  );
}


export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
  dispatch=>({
    takePicture(picture){
      console.log(picture)
    }
  }),
  (stateToProps,disptachToProps) => {
    if(!stateToProps.isAuthenticated){
      if(typeof document !== 'undefined'){
        window.location.href = URL+'login/'
      }
      else{
        Actions.replace('Login')
      }
    }
    return ({...disptachToProps,...stateToProps})
  }
)(MyCamera);
