import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({ onPress, text, primary }) => (
  <TouchableOpacity
    style={[
      styles.button,
      primary ? styles.buttonPrimary : null,
    ]}
    onPress={onPress}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};
export default Button;
