import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import {Colors} from '../../Utils/Colors';

export default StyleSheet.create({
  buttonStyle: {
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    backgroundColor: Colors.green,
  },
  containerStyle: {
    color: Colors.white,
  },
  titleStyle: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: responsiveFontSize(1.8),
    lineHeight: 25,
  },
});
