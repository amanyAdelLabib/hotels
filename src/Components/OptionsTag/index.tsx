import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Icon} from '@rneui/themed';
import styles from './styles';
import {Colors} from './../../Utils/Colors';

export const OptionsTag: React.FC<{
  option: object;
  selectedOption: string;
  setSelectedOption: Function;
}> = ({option, selectedOption, setSelectedOption}) => {
  const navigation = useNavigation();

  const handlePress = useCallback((item) => {
    if(item == 'logout')
    navigation.navigate('Home');
  }, [option, setSelectedOption]);
  return (
    <TouchableOpacity style={[styles.container]} onPress={()=>handlePress(option.onPress)}>
      <>
        <Icon
          containerStyle={styles.iconStyle}
          name={option.icon}
          type={option.iconType}
          color={option.color}
          size={30}
        />
        <Text style={[styles.text]}>{option.name}</Text>
        {option.name != 'Logout' && (
          <Icon
            containerStyle={styles.iconStyle}
            name="chevron-right"
            type="feather"
            color={Colors.appColor1}
          />
        )}
      </>
    </TouchableOpacity>
  );
};
