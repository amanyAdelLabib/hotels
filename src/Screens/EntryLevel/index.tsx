import React, {useCallback, useEffect, useState} from 'react';
import {Image, ScrollView, LogBox} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {authAction} from '../../Actions';
import {EntryList, FormList} from '../../Components';
import {EntryType} from '../../Constants';
import styles from './styles';

LogBox.ignoreAllLogs(); //Ignore all log notifications

export const EntryLevel: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});
  const [entryType, setEntryType] = useState(EntryType.login);

  const {data: userInfo} = useSelector(state => state?.auth || {});

  useEffect(() => {
    if (Object.keys(userInfo).length != 0) goHome();
  }, [userInfo]);

  const goHome = () => {
    navigation.navigate('Home');
  };
  const handleFormChange = ({key, value}) => {
    setUserData(prevState => ({...prevState, [key]: value}));
  };
  const onPressBtn = () => {
    if (entryType == 'Log In')
      dispatch(
        authAction({
          userName: 'amany',
          password: '1234',
        }),
      );
    else navigation.navigate('Home');
  };
  return (
    <>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.container]}
        contentContainerStyle={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require('../../Assets/hopin.png')}
        />
        <EntryList selectedEntry={entryType} setSelectedEntry={setEntryType} />
        <FormList
          entryType={entryType}
          data={userData}
          onChange={(key, value) => {
            handleFormChange({key, value});
          }}
          onPressBtn={onPressBtn}
        />
      </ScrollView>
    </>
  );
};
