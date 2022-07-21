import React, {useCallback} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import { Avatar,Icon } from '@rneui/themed';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const AvatarHeader: React.FC<{
  onPressIcon: Function;
  title: string;
  titleStyle: object;
  containerStyle: object;
  iconProps: object;
  iconContainerStyle: object;
}> = ({
  onPressIcon,
  title,
  titleStyle,
  containerStyle,
  iconProps,
  iconContainerStyle,

}) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
        <Avatar
          size='large'
          rounded
          containerStyle={{ backgroundColor: 'grey' }}
          ImageComponent={() => (
            <Image
            resizeMode="contain"
            style={{
              height: responsiveHeight(10),
              width: responsiveWidth(20),
              borderRadius: 25,
              position: 'absolute',
            }}
            source={require('../../Assets/boarding.png')}
            />
          )}
        >
          <Icon
          containerStyle={styles.headerIconStyle}
            name="camera"
            type="feather"
            size={18}
            color={Colors.white}
            onPress={()=> console.log('dd')}
          />
        </Avatar>

        <Text style={styles.nameText}>Daniel Bronks</Text>
        <Text style={styles.countryText}>Indonesia</Text>
    </View>
  );
};
