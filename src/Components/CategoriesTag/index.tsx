import React, {useCallback,useMemo} from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Categories}from '../../Constants';
import {Tag}from '../Tag';

export const CategoriesTag:  React.FC<{
  selectedCategory: string;
  setSelectedCategory: Function;
}> = ({selectedCategory, setSelectedCategory}) => {
  const formattedCategories = useMemo(() => Object.keys(Categories), [Categories]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={formattedCategories}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <Tag
          category={item}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};