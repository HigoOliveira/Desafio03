import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.inactive,
    height: 42,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  right: {
    marginLeft: 7.5,
  },
  left: {
    marginRight: 7.5,
  },
});

export default styles;
