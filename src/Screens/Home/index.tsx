import React, {useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  FlatList,
  LogBox,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {CategoriesTag, AllHotels} from '../../Components';
import {Categories} from '../../Constants';
import {Icon} from '@rneui/themed';

LogBox.ignoreAllLogs(); //Ignore all log notifications

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(
    Categories.recommend,
  );
  const {data: userInfo} = useSelector(state => state?.auth || {});
  const {data: placesData} = useSelector(state => state?.places || {});

  useEffect(() => {}, []);

  const goProfile = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);
  return (
    <>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.container]}
        contentContainerStyle={styles.contentContainer}>
        <Icon
          containerStyle={styles.headerIconStyle}
          name="price-ribbon"
          type="entypo"
          size={30}
          color={Colors.appColor1}
          onPress={goProfile}
        />

        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            Good Morning ,{'\n'}
            {userInfo.userName}
          </Text>
        </View>

        <CategoriesTag
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <FlatList
          horizontal={true}
          keyExtractor={(item: string, index: number) => index.toString()}
          showsHorizontalScrollIndicator={false}
          data={placesData}
          renderItem={({item, index}: any) => <AllHotels post={item} />}
        />
      </ScrollView>
    </>
  );
};
