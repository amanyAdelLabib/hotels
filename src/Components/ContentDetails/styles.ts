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
    width: responsiveWidth(90),
    flexDirection: 'column',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(2),
  },

  paragraph: {
    color: Colors.lightGray,
    fontWeight: '400',
    fontSize: responsiveFontSize(1.8),
    lineHeight: 25,
    marginVertical:responsiveHeight(1.5)
  },
  
});
