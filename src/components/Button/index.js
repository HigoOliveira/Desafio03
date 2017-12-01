import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({
  onPress,
  text,
  primary,
  right,
  left,
}) => (
  <TouchableOpacity
    style={[
      styles.button,
      primary ? styles.buttonPrimary : null,
      right ? styles.right : null,
      left ? styles.left : null,
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
  right: PropTypes.bool,
  left: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  right: false,
  left: false,
};
export default Button;
