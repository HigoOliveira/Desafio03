import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    backgroundColor: colors.black,
    opacity: 0.6,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 20,
  },
  title: {
    fontSize: fonts.big,
    color: colors.darker,
  },
});

export default styles;
