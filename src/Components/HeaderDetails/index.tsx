import React, {useCallback} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Icon} from '@rneui/themed';

export const HeaderDetails: React.FC<{
  onPressIcon: Function;
  title: string;
  titleStyle: object;
  containerStyle: object;
  iconProps: object;
  iconContainerStyle: object;
}> = ({
  onPressIcon,
  title,
  titleStyle,
  containerStyle,
  iconProps,
  iconContainerStyle,
}) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <View style={styles.leftSide}>
        <Image
          style={styles.image}
          source={require('../../Assets/hotel.jpg')}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.firstTitle}>Tropicasa De Hotel</Text>
        <Text style={styles.secondTitle}>Amsterdam, Netherlands</Text>
        <View style={styles.rowContainer}>
          <Icon name="star" size={15} type="antdesign" color={Colors.orange} />
          <Text style={styles.rateText}>4,6</Text>
          <Text style={styles.reviewText}>(1763 Reviews)</Text>
        </View>
      </View>
    </View>
  );
};
