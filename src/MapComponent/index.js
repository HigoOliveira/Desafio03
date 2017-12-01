import React, { Component } from 'react';
import { View, Image } from 'react-native';

import MapView from 'react-native-maps';

import Modal from 'components/Modal';

import styles from './styles';


export default class Map extends Component {
  state = {
    users: [
      {
        id: '09saidfsa09f-asdasf0',
        coordinate: {
          latitude: -27.2177659,
          longitude: -49.6451598,
        },
        login: 'Higo Ribeiro',
        bio: 'Descrição da Bio',
        image: 'https://avatars3.githubusercontent.com/u/3085522?s=460&v=4',
      },
    ],
  };

  handleLongPress = (e) => {
    console.tron.log(e.coordinate); // <- Não aparece
    this.modal.setModalVisible(true);
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
          onLongPress={(event) => { this.handleLongPress(event.nativeEvent); }}
        >
          {this.state.users.map(user => (
            <MapView.Marker
              coordinate={user.coordinate}
              key={user.id}
              title={user.login}
              description={user.bio}
            >
              <View style={styles.border}>
                <Image
                  source={{
                    uri: user.image,
                  }}
                  style={styles.image}
                  onLoad={() => this.forceUpdate()}
                />
              </View>
            </MapView.Marker>
            ))}
        </MapView>
        <Modal ref={(ref) => { this.modal = ref; }} />
      </View>
    );
  }
}
