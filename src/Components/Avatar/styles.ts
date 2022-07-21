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
    minHeight: responsiveHeight(18),
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 20,
    marginTop:responsiveHeight(15),

  },
  headerIconStyle: {
    position: 'absolute',
    right: -spacing.sm,
    bottom: 0,
    backgroundColor:Colors.green,
    borderRadius:40,
    padding:6,
    borderColor:Colors.white,
    borderWidth:1.5
  },
  nameText: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: responsiveFontSize(2.5),
    lineHeight: 32,
    marginVertical:responsiveHeight(.5)
  },
  countryText: {
    color: Colors.appColor6,
    fontWeight: '600',
    fontSize: responsiveFontSize(1.8),
    lineHeight: 21,
  },

});
