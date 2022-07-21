import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import { Icon } from "@rneui/themed";
import styles from './styles';
import { Colors } from './../../Utils/Colors';

export const Tag: React.FC<{
  category: string;
  selectedCategory: string;
  setSelectedCategory: Function;
}> = ({category, selectedCategory, setSelectedCategory}) => {
  const handlePress = useCallback(() => {
    setSelectedCategory(category);
  }, [category, setSelectedCategory]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
      ]}
      onPress={handlePress}>
      <Text style={[styles.text,selectedCategory === category && styles.selectedText]}>{`${
        category.charAt(0).toUpperCase() + category.slice(1)
      }`}</Text>
     {selectedCategory === category && (<Icon
        name='dot-single'
        type='entypo'
        color={Colors.green}
      />)} 
    </TouchableOpacity>
  );
};