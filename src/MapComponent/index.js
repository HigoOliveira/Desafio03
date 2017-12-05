import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import MapView from 'react-native-maps';

import Modal from 'components/Modal';

import styles from './styles';


class Map extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      coordinate: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }).isRequired,
      login: PropTypes.string,
      bio: PropTypes.string,
      avatar_url: PropTypes.string,
    })).isRequired,
  }

  state = {
    showModal: false,
    coordinate: {},
  }

  handleLongPress = (e) => {
    this.setState({ showModal: true, coordinate: e.coordinate });
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
          {this.props.users.map(user => (
            <MapView.Marker
              coordinate={user.coordinate}
              key={user.id}
              title={user.login}
              description={user.bio}
            >
              <View style={styles.border}>
                <Image
                  source={{
                    uri: user.avatar_url,
                  }}
                  key={`${user.id}`}
                  style={styles.image}
                  onLoad={() => this.forceUpdate()}
                />
              </View>
            </MapView.Marker>
          ))}
        </MapView>
        <Modal
          visible={this.state.showModal}
          coordinate={this.state.coordinate}
          onCloseModal={() => this.setState({ showModal: false, coordinate: {} })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Map);
