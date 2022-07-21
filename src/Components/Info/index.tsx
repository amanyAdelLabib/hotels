import React, {useCallback} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Icon} from '@rneui/themed';

export const Info: React.FC<{
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
      <View style={styles.side}>
      <Text style={styles.numberText}>47</Text>
        <Text style={styles.title}>Reviews</Text>
      </View>
      <View style={styles.side}>
        <Text style={styles.numberText}>75</Text>
        <Text style={styles.title}>Transactions</Text>
      </View>
      <View style={styles.side}>
      <Text style={styles.numberText}>2</Text>
        <Text style={styles.title}>Bookings</Text>
      </View>
    </View>
  );
};
