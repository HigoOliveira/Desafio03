import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  border: {
    width: 42,
    height: 42,
    borderWidth: 5,
    borderColor: colors.white,
    borderRadius: 21,
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});

export default styles;
