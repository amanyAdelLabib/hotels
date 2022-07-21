import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Button, Icon} from '@rneui/themed';

export const Header: React.FC<{
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
      <Icon {...iconProps} containerStyle={[styles.iconContainerStyle,iconContainerStyle]} onPress={onPressIcon} />
      {title && (<Text style={[styles.titleStyle,titleStyle]}>{title}</Text>)}
    </View>
  );
};
