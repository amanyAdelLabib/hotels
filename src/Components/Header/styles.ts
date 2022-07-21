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
    width:responsiveWidth(100),
    height:responsiveHeight(8),
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:responsiveWidth(5),
  },
  iconContainerStyle:{
    marginRight:responsiveWidth(3)
  },
  titleStyle: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: responsiveFontSize(2.5),
    lineHeight: 27.30,
  },
});
