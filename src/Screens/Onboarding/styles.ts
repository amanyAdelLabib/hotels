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
  },
  contentContainer: {

  },

  image: {
    flex: 1,
    width: responsiveWidth(90),
    height: responsiveHeight(60),
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    resizeMode: 'contain',
    marginBottom:responsiveHeight(5)
  },

  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    lineHeight: 33,
    paddingHorizontal: spacing.lg,
    marginVertical: spacing.md,
    color:Colors.black
  },
  content: {
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    lineHeight: 28,
    paddingHorizontal: spacing.lg,
    color:Colors.lightGray
  },
  btnContainer:{
    alignItems:'center'
  },
  btnStyle:{
    width:responsiveWidth(35),
    marginVertical:responsiveHeight(5)
  },
  titleBtnStyle:{
    fontWeight: '700',
    lineHeight: 24.55,
  }
});
