import React, {useCallback} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Icon} from '@rneui/themed';

export const ContentDetails: React.FC<{
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
      <Text style={styles.paragraph}>
        Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are
        always maintaning the quality for better rating and high attitude
        service for you.
      </Text>
      <Text style={styles.paragraph}>
        Tropicasa De Hotel located in a strategic location, only 6 Km from the
        airport and 1 Km from the train station. The hotel located in the middle
        of the city so you can enjoy the city and see something nearby.
      </Text>
      <Text style={styles.paragraph}>
        You will be welcomed amongst olive trees, citron trees and magnolias, in
        gardens that hide exotic plants and in a wonderful outdoor pool with
        deck chairs.
      </Text>
    </View>
  );
};
