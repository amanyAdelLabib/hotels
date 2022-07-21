import React, {useCallback, useMemo,useState} from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {LoginFields,SignUpFields} from '../../Constants';
import {InputField} from '../InputField';
import {Btn} from '../Button';

export const FormList: React.FC<{
  data: object;
  onChange: Function;
  entryType:string;
  onPressBtn:Function;
}> = ({data,onChange,entryType,onPressBtn}) => {
  const [secureFlag, setSecureFlag] = useState(true);

  const formattedFields = useMemo(() => entryType == "Log In" ?LoginFields:SignUpFields, [entryType]);
  const onChangeInput = useCallback((val,key) => {
    onChange(key,val)
    }, []);
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={formattedFields}
      keyExtractor={(item: string) => item.name}
      renderItem={({item,index}: any,) => (

        <InputField
        value={data?.[item.name] || ''}
        label={item.label}
        placeholder={item.placeholder}
        onChangeText={(val)=> onChangeInput(val,item.name)}
        iconFlag={item?.iconFlag}
        iconProps={{...item?.iconProps,onPress:()=> setSecureFlag(!secureFlag),name:(secureFlag?'eye-with-line':'eye')}}
        secureText={secureFlag &&item?.secureText}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={()=>  <Btn
        title={entryType == "Log In"?"Log in":"Sign Up"}
        buttonStyle={styles.btnStyle}
        titleStyle={styles.titleBtnStyle}
        onPressBtn={onPressBtn}
      />}
      ListFooterComponentStyle={styles.footerListStyle}
    />
  );
};
