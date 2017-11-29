import React, { Component } from 'react';
import {
  Modal,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

export default class MyModal extends Component {
  state = {
    modalVisible: true,
  }


  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        transparent={true}
        onRequestClose={() => { alert("Modal has been closed."); }}
      >
        <View style={styles.overlay}>
          <View style={styles.background} />
          <View style={styles.container}>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
        </View>
      </Modal>
    );
  }
}
