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
    borderWidth: 1,
    borderColor: Colors.appColor7,
    borderRadius: 12,
    flexDirection:'row',
    width:responsiveWidth(90),
    height: responsiveHeight(8),
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    marginVertical: spacing.md,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    color:Colors.appColor2,
    marginHorizontal:responsiveWidth(1),
    lineHeight:21,
    width:'65%',

  },
  iconStyle:{
    width:'15%',
  }
});
