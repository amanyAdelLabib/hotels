import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Input, Icon} from '@rneui/themed';

export const InputField: React.FC<{
  onChangeText: Function;
  label: string;
  value: string;
  placeholder: string;
  labelStyle: object;
  inputContainerStyle: object;
  inputStyle: object;
  containerStyle: object;
  iconFlag:boolean;
  iconProps:object;
  secureText:boolean;

}> = ({
  onChangeText,
  label,
  labelStyle,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  placeholder,
  iconFlag,
  iconProps,
  value,
  secureText

}) => {
  return (
    <Input
    value={value || ''}
    label={label}
    labelStyle={[styles.labelStyle,labelStyle]}
    containerStyle={[styles.containerStyle,containerStyle]}
    inputContainerStyle={[styles.inputContainerStyle,inputContainerStyle]}
    inputStyle={[styles.inputStyle,inputStyle]}
    rightIcon={iconFlag &&{ ...iconProps }}
    placeholder={placeholder}
    onChangeText={onChangeText}
    secureTextEntry={secureText || false}
  />
  );
};
