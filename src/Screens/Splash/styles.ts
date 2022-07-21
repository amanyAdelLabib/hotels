import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import {Colors} from '../../Utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.green,
    justifyContent:'center',
    alignItems:'center'
  },

  rightContainer:  {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  leftContainer:  {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  image: {
    width: responsiveWidth(70),
    height: responsiveHeight(45),
    resizeMode: 'cover',
  },
  logo: {
    width: responsiveWidth(20),
    height: responsiveHeight(20),
    resizeMode: 'contain',
  },

});
