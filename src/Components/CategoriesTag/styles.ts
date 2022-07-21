import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import {Colors} from '../../Utils/Colors';

export default StyleSheet.create({
  list: {
    maxHeight: responsiveHeight(5),
    marginVertical:spacing.md
  },
  contentContainer: {
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
