import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import {Colors} from '../../Utils/Colors';

export default StyleSheet.create({
  containerStyle: {
    width: responsiveWidth('95'),
    height: responsiveHeight('15'),
    marginVertical: spacing.sm,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: responsiveWidth(3),
  },
  labelStyle: {
    marginVertical: responsiveHeight(1.5),
    color: Colors.appColor2,
    fontWeight: '600',
    fontSize: responsiveFontSize(2),
    lineHeight: 22,
  },
  inputStyle: {
    color: Colors.appColor2,
    fontWeight: '600',
    fontSize: responsiveFontSize(2),
    lineHeight: 22,
  },
});
