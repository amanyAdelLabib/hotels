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
    minHeight: responsiveHeight(5),
  },
  contentContainer: {
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerList:{
    fontWeight:'700',
    lineHeight:27,
    fontSize:responsiveFontSize(3),
    color:Colors.black
  }
});
