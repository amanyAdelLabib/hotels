import React, {useCallback} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Btn} from '../../Components';
import styles from './styles';
import { Colors } from '../../Utils/Colors';

type Post = {
  title: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  author: string;
};

export const AllHotels: React.FC<{
  post: Post;
}> = ({post}) => {
  const navigation: any = useNavigation();
  const handleNavigate = useCallback(() => {
    navigation.navigate('HotelDetails', {article: post});
  }, [ navigation, post]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
       onPress={handleNavigate}
    >
      <Image
        source={require('../../Assets/hotel.jpg')}
        resizeMode={'cover'}
        style={styles.image}
      />
      <View style={[styles.rate]}>
        <Btn
          disabled={true}
          title="4.6"
          disabledStyle={styles.btnStyle}
          disabledTitleStyle={styles.titleBtnStyle}
          iconProps={{
            name: 'star',
            type: 'antdesign',
            size: 15,
            color: Colors.orange,
          }}
          iconPosition='left'
          iconContainerStyle={styles.iconContainerStyle}
        />
      </View>
      <LinearGradient
        colors={['#24242400', '#3C3C3C']}
        style={styles.titleContainer}>
        <Text style={styles.nameText}>{post?.name}</Text>
        <Text style={[styles.addressText]}>{post?.vicinity}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
