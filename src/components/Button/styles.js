import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.inactive,
    height: 42,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  text: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
});

export default styles;
