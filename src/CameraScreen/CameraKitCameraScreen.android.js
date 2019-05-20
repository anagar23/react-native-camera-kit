import React, { Component } from 'react';
import CameraScreenBase from './CameraKitCameraScreenBase';
import { View } from 'react-native';

export default class CameraScreen extends CameraScreenBase {
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }} {...this.props}>
        {this.renderCamera()}        
        {this.renderBottomButtons()}
      </View>
    );
  }
}

