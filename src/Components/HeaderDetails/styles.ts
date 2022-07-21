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
    height: responsiveHeight(18),
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(2),
    marginVertical:responsiveHeight(3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftSide: {
    width: '40%',
  },
  rightSide: {
    width: '58%',
    paddingHorizontal: spacing.sm,
    justifyContent: 'space-around',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  firstTitle: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: responsiveFontSize(2),
    lineHeight: 24,
  },
  secondTitle: {
    color: Colors.appColor5,
    fontWeight: '400',
    fontSize: responsiveFontSize(1.5),
    lineHeight: 25,
  },
  rateText: {
    color: Colors.orange,
    fontWeight: '600',
    fontSize: responsiveFontSize(1.5),
  },
  reviewText: {
    color: Colors.appColor1,
    fontWeight: '400',
    fontSize: responsiveFontSize(1.5),
  },
});
