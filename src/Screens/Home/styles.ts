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
  headerIconStyle:{
    position: 'absolute',
    right: spacing.lg,
    top: spacing.lg,
  },
 headerContainer: {

    paddingHorizontal: spacing.xxl,
    marginTop: spacing.xxxl,
    marginBottom:spacing.lg,
  },
  title:{
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    lineHeight: 38.19,
    color:Colors.black

  }
});
