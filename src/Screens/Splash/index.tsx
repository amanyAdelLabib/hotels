import React, {useCallback, useEffect, useState} from 'react';
import {Image, PermissionsAndroid, View, LogBox} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import {useNavigation} from '@react-navigation/native';
import {getPlaces} from '../../Actions';
import styles from './styles';

LogBox.ignoreAllLogs(); //Ignore all log notifications

export const Splash: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [coords, setCoords] = useState({});

  const {data: placesData} = useSelector(state => state?.places || {});

  useEffect(() => {
    requestPermissions();
  }, []);
  useEffect(() => {
    if (Object.keys(placesData).length !== 0) {
      navigation.navigate('Onboarding');
    }
  }, [placesData]);
  useEffect(() => {
    if (Object.keys(coords).length !== 0) {
      dispatch(
        getPlaces({
          lat: coords.latitude,
          long: coords.longitude,
        }),
      );
    }
  }, [coords]);


  async function requestPermissions() {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          setCoords(position.coords);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }
  return (
    <>
      <View style={[styles.container]}>
        <Image
          style={styles.logo}
          source={require('../../Assets/hopin.png')}
        />
        <View style={styles.leftContainer}>
          <Image
            style={styles.image}
            source={require('../../Assets/left.png')}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.rightContainer}>
          <Image
            style={styles.image}
            source={require('../../Assets/right.png')}
            resizeMode={'cover'}
          />
        </View>
      </View>
    </>
  );
};
