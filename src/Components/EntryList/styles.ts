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
    minHeight: responsiveHeight(7),
    width:responsiveWidth(100),
    backgroundColor:Colors.white,

  },
  contentContainer: {
    width:responsiveWidth(100),


  },
});
