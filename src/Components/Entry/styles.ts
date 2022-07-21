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

    width:responsiveWidth(50),
    paddingTop: spacing.sm,

    alignItems: 'center',
    alignContent:'center',
  },
  text: {
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    color:Colors.appColor2,
    lineHeight:27
  },

  selected: {
    borderBottomColor: Colors.green,
    borderBottomWidth:2
  },
});
