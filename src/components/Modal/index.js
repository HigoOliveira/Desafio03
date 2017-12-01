import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
} from 'react-native';

import PropTypes from 'prop-types';

import Button from 'components/Button';

import styles from './styles';


export default class MyModal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    coordinate: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
  }

  state = {
    user: '',
  }

  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.props.visible}
        transparent
        onRequestClose={() => {}}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Usuário no Github"
              value={this.state.user}
              onTextChange={user => this.setState({ user })}
            />

            <View style={styles.containerButton}>
              <Button
                text="Cancelar"
                onPress={() => {
                  this.props.onCloseModal();
                }}
                left
              />
              <Button
                text="Salvar"
                onPress={() => {
                  this.props.onCloseModal();
                }}
                primary
                right
              />
            </View>

          </View>
        </View>
      </Modal>
    );
  }
}
