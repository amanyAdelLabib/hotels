import React, {useCallback,useMemo} from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {EntryType}from '../../Constants';
import {Entry}from '../Entry';

export const EntryList:  React.FC<{
  selectedEntry: string;
  setSelectedEntry: Function;
}> = ({selectedEntry, setSelectedEntry}) => {
  const formattedEntryType = useMemo(() => Object.values(EntryType), [EntryType]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      extraData={selectedEntry}
      data={formattedEntryType}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <Entry
          entryType={item}
          selectedEntry={selectedEntry}
          setSelectedEntry={setSelectedEntry}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};