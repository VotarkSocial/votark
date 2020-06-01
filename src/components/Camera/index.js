import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, Picker, TextInput } from 'react-native';
import { Camera } from 'expo-camera'; 
import styles from  './styles'
import TokenRefresh from '../TokenRefresh';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as selectors from '../../reducers'
import { setPicture } from '../../actions/newPost';
import { LinearGradient } from 'expo-linear-gradient';
import {colors} from '../../../configuration'
import { startFetchTopic } from '../../actions/topic';

const MyCamera = ({takePicture,topics,fetch}) => {

  useEffect(fetch,
    []
  );


  const getHash = (index) => {
    const array = topics[index]
    let firstDescrip = ''
    if(array && array.hashtags){
      array.hashtags.forEach(hash => {
        firstDescrip += "#" + hash.content + " "
      })
    }
    return firstDescrip
  }

  

  

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [uri, changeUri] = useState('')
  const [selectedValue, setSelectedValue] = useState(topics[0]);
  const [isAdding,changeIsAdding] = useState(false)
  const [description, changeDescription] = useState(getHash(0))

  const [type, setType] = useState(Camera.Constants.Type.back);useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.mainContainer}>
        {uri?
          <LinearGradient
              colors={[colors.primaryB, 'transparent']}
              style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-start'
              }}
          >
          <View style={(typeof document==='undefined')?styles.header:styles.webHeader}>
            <TouchableOpacity onPress={()=>changeUri('')}>
                <Image style={styles.icon} source={require('../../public/static/icon/return.png')} ></Image>
            </TouchableOpacity>  
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>READY TO POST</Text>
          <View style={styles.bar}></View>
          <View style={styles.row2}>
            <Image  
            style={styles.image}
            source={{uri: uri}} />
            <TextInput
              style={styles.input}
              type="multiline"
              multiline={true}
              placeholder="description"
              value={description}
              onChangeText={changeDescription}
              onChange={e=>changeDescription(e.target.value)}
            />
          </View>
          <View style={styles.bar}></View>
          <View style={styles.row}>
            <Text >Topic:</Text>
            <Picker 
              selectedValue={selectedValue}
              style={{ height: 50, width: 150, color:colors.black}}
              onValueChange={(itemValue, itemIndex) => {
                changeDescription(getHash(itemIndex))
                setSelectedValue(itemValue)}}
            >
              {topics.map(
                topic => <Picker.Item label={topic.name} value={topic.name} />
              )}
            </Picker>
            <TouchableOpacity onPress={()=>changeIsAdding(!isAdding)}>
                <Image style={styles.icon} source={isAdding? require('../../public/static/icon/close.png'):require('../../public/static/icon/add_dark.png')} ></Image>
            </TouchableOpacity>  
          </View>
          <View style={styles.bar}></View>
          <View style={styles.row3}>
          <Text style={styles.button} type="submit" onPress={
              () => onSubmit(username,password)
          }>{'Publish'}</Text>
          </View>
        </View>
          </LinearGradient>
        :
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
                changeUri(photo.uri)
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
        }
      <TokenRefresh/>
    </View>
  );
}


export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
    topics: selectors.getTopics(state),
  }),
  dispatch=>({
    takePicture(data){

    },
    fetch(){
      dispatch(startFetchTopic())
    },
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
