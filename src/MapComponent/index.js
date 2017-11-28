import React, { Component } from 'react';
import { View, Image } from 'react-native';

import MapView from 'react-native-maps';

import styles from './styles';

export default class Map extends Component {
  state = {};

  handleLongPress = (e) => {
    console.tron.log('me chamou');
    console.tron.log(e); // <- Não aparece
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0041,
            longitudeDelta: 0.031,
          }}
          onLongPress={this.handleLongPress}
        >
          <MapView.Marker
            coordinate={{
                latitude: -27.2177659,
              longitude: -49.6451598,
            }}
          >
            <Image
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/3085522?s=460&v=4',
              }}
              style={styles.image}
              onLoad={() => this.forceUpdate()}
            />
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}
