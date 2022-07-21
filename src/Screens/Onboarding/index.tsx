import React, {useCallback, useEffect, useState} from 'react';
import {Image, ScrollView, Text, View, LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Btn} from '../../Components';

LogBox.ignoreAllLogs(); //Ignore all log notifications

export const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const onPressNext = useCallback(() => {
    navigation.navigate('Entry');
  }, [navigation]);
  return (
    <>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.container]}
        contentContainerStyle={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require('../../Assets/boarding.png')}
          resizeMode={'cover'}
        />

        <Text style={[styles.title]}>Travel with no worry</Text>
        <Text style={[styles.content]}>
          You can now experience the next level travel experience for hotel
          bookings.
        </Text>
        <View style={styles.btnContainer}>
          <Btn
            title="Next"
            buttonStyle={styles.btnStyle}
            titleStyle={styles.titleBtnStyle}
            onPressBtn={() => onPressNext()}
          />
        </View>
      </ScrollView>
    </>
  );
};
