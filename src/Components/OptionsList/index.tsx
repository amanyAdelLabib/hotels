import React, {useCallback,useMemo} from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Options}from '../../Constants';
import {OptionsTag}from '../OptionsTag';

export const OptionsList:  React.FC<{
  selectedCategory: string;
  setSelectedCategory: Function;
}> = ({selectedCategory, setSelectedCategory}) => {
  const formattedOptions = useMemo(() => Options, [Options]);
  const renderHeader = () => {
    return <Text style={styles.headerList}>Options</Text>;
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={formattedOptions}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <OptionsTag
          option={item}
          selectedOption={selectedCategory}
          setSelectedOption={setSelectedCategory}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={renderHeader}
      ListHeaderComponentStyle={{
        width:'100%'
      }}
    />
  );
};