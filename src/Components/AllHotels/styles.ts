import { StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import { Colors } from '../../Utils/Colors';
export default StyleSheet.create({
  container: {
    height: responsiveHeight(60),
    marginVertical: spacing.lg,
    backgroundColor: Colors.appColor1,
    borderRadius: 24,
    marginHorizontal:  spacing.md,
    elevation: 6,
    width:responsiveWidth(65)
  },
  imageContainer: {flex: 1},
  image: {
    flex: 1,
    width: responsiveWidth(65),
    height: responsiveHeight(60),
    borderRadius: 24,
    height: responsiveHeight(30),
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft:  spacing.md,
    paddingRight:  spacing.sm,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingVertical:responsiveHeight(2)
  },
  nameText: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '700',
    lineHeight: 27,
    color: Colors.white,
  },
  addressText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    lineHeight: 25,
    color: Colors.white,
  },
  rate: {
    position: 'absolute',
    right: spacing.md,
    top: spacing.md,
  },
  btnContainer:{
  },
  btnStyle:{
    width:responsiveWidth(18),
    height:responsiveHeight(5),
    backgroundColor: Colors.appColor3,
  },
  titleBtnStyle:{
    fontWeight: '600',
    lineHeight: 19.1,
    color: Colors.white,

  },
  iconContainerStyle:{
    marginRight:responsiveWidth(2),
  }
});