import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, View, FlatList, LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Btn, Header, HeaderDetails, ContentDetails} from '../../Components';
import {Categories} from '../../Constants';

LogBox.ignoreAllLogs(); //Ignore all log notifications

export const HotelDetails: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <>
      <Header
        iconProps={{
          name: 'arrow-left',
          type: 'feather',
          size: 30,
          color: Colors.black,
        }}
        onPressIcon={goBack}
        title="Description"
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.container]}
        contentContainerStyle={styles.contentContainer}>
        <HeaderDetails />
        <ContentDetails />
        <View style={styles.btnContainer}>
          <Btn
            title="Book"
            buttonStyle={styles.btnStyle}
            titleStyle={styles.titleBtnStyle}
            onPressBtn={() => console.log('book')}
          />
        </View>
      </ScrollView>
    </>
  );
};
