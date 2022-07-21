import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, LogBox} from 'react-native';
import styles from './styles';
import {AvatarHeader, Info, OptionsList} from '../../Components';

LogBox.ignoreAllLogs(); //Ignore all log notifications

export const Profile: React.FC = () => {
  return (
    <>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.container]}
        contentContainerStyle={styles.contentContainer}>
        <AvatarHeader />
        <Info />
        <OptionsList />
      </ScrollView>
    </>
  );
};
