import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
} from 'react-native';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { addUser } from 'redux/ducks/users';

import Button from 'components/Button';

import styles from './styles';

class MyModal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    coordinate: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
    addUser: PropTypes.func.isRequired,
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
        onShow={() => { this.input.focus(); }}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput
              style={styles.input}
              ref={(ref) => { this.input = ref; }}
              autoCaptalize="none"
              autoCorrect={false}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Usuário no Github"
              value={this.state.user}
              onChangeText={user => this.setState({ user })}
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
                  this.props.addUser(this.state.user, this.props.coordinate);
                  this.setState({ user: '' });
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

export default connect(null, { addUser })(MyModal);
