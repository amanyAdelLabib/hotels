import {Colors} from '../Utils/Colors';

interface field {
  name: string;
  label: string;
  placeholder: string;
  secureText?: Boolean | null;
  iconProps?: object | null;
  iconFlag?: boolean | null;
  iconPropsPressed?: object | null;
  onPressIcon?: Function | null;
}

export const SignUpFields: field[] = [
  {
    name: 'username',
    label: 'Username',
    placeholder: 'Enter UserName',
  },
  {
    name: 'email',
    label: 'E-mail',
    placeholder: 'Enter Email',
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
