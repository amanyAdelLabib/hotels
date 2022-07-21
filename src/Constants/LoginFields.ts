import {Colors} from '../Utils/Colors';

interface field {
  name: string;
  label: string;
  placeholder: string;
  iconProps?: object | null;
  iconFlag?: boolean | null;
  iconPropsPressed?: object | null;
  onPressIcon?: Function | null;
}

export const LoginFields: field[] = [
  {
    name: 'username',
    label: 'Username or E-mail',
    placeholder: 'Enter Username or E-mail',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter Password',
    secureText: true,
    iconFlag: true,
    iconProps: {
      type: 'entypo',
      color:Colors.appColor1
    },
  },

];
