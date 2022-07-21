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
    marginVertical:spacing.md
  },
  contentContainer: {
  },
  btnContainer:{
    alignItems:'center'
  },
  btnStyle:{
    width:responsiveWidth(83),
    marginVertical:responsiveHeight(3)
  },
  titleBtnStyle:{
    fontWeight: '700',
    lineHeight: 24.55,
  },
  footerListStyle:{
    alignItems:'center'
  }
});
