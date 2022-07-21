import {StyleSheet} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import { Colors } from './../../Utils/Colors';

export default StyleSheet.create({
  container: {
    height: responsiveHeight(20),
    paddingHorizontal: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    color:Colors.appColor1
  },
  selectedText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '700',
    color:Colors.appColor2
  },
  selected: {
    backgroundColor: Colors.appColor4,
    borderColor: Colors.appColor5,
  },
});
