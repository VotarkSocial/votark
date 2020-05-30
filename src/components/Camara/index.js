import { Camera } from 'expo';
import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import { URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import { logout } from '../../actions/auth';

const MyCamera = ({onClick,home}) => (
    <View style={cam_styles.container}>
        <Camera ref={cam=>{this.camera = cam;}} style={cam_styles.preview} aspect = {Camera.constants.Aspect.fill}>
                <Text style={cam_styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
            </Camera>
    </View>
);

export default MyCamera