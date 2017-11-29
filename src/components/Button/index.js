import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({ onPress, text }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
