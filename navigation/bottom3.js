import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import A from '../screens/A';
import B from '../screens/B';
import C from '../screens/C';
import D from '../screens/D';

const bottom3 = createBottomTabNavigator({
  바텀좋아요: { screen: A },
  바텀홈: { screen: B },
  바텀구독: { screen: C },
  바텀기록: { screen: D },
  바텀보관함: { screen: D }
},
{
  tabBarOptions : {
    activeTintColor: '#ff0000',
    labelStyle : {
      fontSize : 15,
      color : 'white'
    },
    style : {
      backgroundColor : 'black'
    }
  }
});

export default createAppContainer(bottom3);