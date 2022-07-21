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
    width: responsiveWidth(85),
    height: responsiveHeight(15),
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(2),
    marginVertical: responsiveHeight(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  side: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  numberText: {
    color: Colors.green,
    fontWeight: '700',
    fontSize: responsiveFontSize(3),
    lineHeight: 38,
  },
  title: {
    color: Colors.appColor5,
    fontWeight: '400',
    fontSize: responsiveFontSize(2),
    lineHeight: 25,
  },
});
