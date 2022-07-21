import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import { Icon } from "@rneui/themed";
import styles from './styles';
import { Colors } from './../../Utils/Colors';

export const Entry: React.FC<{
  entryType: string;
  selectedEntry: string;
  setSelectedEntry: Function;
}> = ({entryType, selectedEntry, setSelectedEntry}) => {
  const handlePress = useCallback(() => {
    setSelectedEntry(entryType);
  }, [entryType, setSelectedEntry]);
  return (
    <TouchableOpacity
      style={[
        styles.container,selectedEntry === entryType && styles.selected
      ]}
      onPress={handlePress}>
      <Text style={[styles.text]}>{`${
        entryType.charAt(0).toUpperCase() + entryType.slice(1)
      }`}</Text>
     
    </TouchableOpacity>
  );
};