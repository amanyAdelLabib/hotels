import {Colors} from '../Utils/Colors';

interface option {
  name: string;
  icon: string;
  iconType: string;
  color:string;
  onPress:string;
}

export const Options: option[] = [
  {name: 'User Settings', icon: 'price-ribbon', iconType: 'entypo',color:Colors.appColor1,onPress:'user'},
  {name: 'Logout', icon: 'logout', iconType: 'material-community',color:Colors.appColor1,  onPress:'logout'},
  {name: 'Bookings', icon: 'check-circle', iconType: 'feather',color:Colors.green,onPress:'booking'},
];
