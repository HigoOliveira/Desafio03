import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: 32,
    height: 32,
    borderWidth: 5,
    borderColor: colors.white,
    borderRadius: 16,
  },
});

export default styles;
