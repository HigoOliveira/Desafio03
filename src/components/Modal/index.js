import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
} from 'react-native';

import Button from 'components/Button';

import styles from './styles';


export default class MyModal extends Component {
  state = {
    modalVisible: false,
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
        onRequestClose={() => {}}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Usuário no Github"
            />

            <View style={styles.containerButton}>
              <Button
                text="Cancelar"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />
              <Button
                text="Salvar"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />
            </View>

          </View>
        </View>
      </Modal>
    );
  }
}
