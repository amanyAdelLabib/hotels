import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Button, Icon} from '@rneui/themed';

export const Btn: React.FC<{
  onPressBtn: Function;
  iconPosition: string;
  radius: number;
  title: string;
  titleStyle: object;
  containerStyle: object;
  buttonStyle: object;
  iconProps:object;
  iconContainerStyle:object;
  disabled:boolean;
  disabledStyle:object;
  disabledTitleStyle:object;
}> = ({
  onPressBtn,
  iconPosition,
  radius,
  title,
  titleStyle,
  containerStyle,
  buttonStyle,
  iconProps,
  iconContainerStyle,
  disabled,
  disabledStyle,
  disabledTitleStyle,
}) => {
  return (
    <Button
    disabled={disabled || false}
      onPress={() => onPressBtn()}
      buttonStyle={[styles.buttonStyle, buttonStyle]}
      containerStyle={[styles.containerStyle, containerStyle]}
      iconPosition={iconPosition|| 'right'}
      icon={iconProps}
      iconContainerStyle={iconContainerStyle}
      radius={radius || 28.5}
      disabledStyle={disabledStyle}
      disabledTitleStyle={disabledTitleStyle}
      titleStyle={[styles.titleStyle, titleStyle]}>
      {title}
    </Button>
  );
};
