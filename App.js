// Yelp informations
// Client ID: lviCH3z_gB-BFVTiAWGhFQ
// API Key: i3e1NGm5NSlW91sstH6xdZ9SPOOKMbR8ucgieeYkONyck2FUbcVe0skdbeGgdbDO0-mbCJpCX7-QA_mY5jb3x8lSRQ3kRcpHRVGBTmS_GUdZ2tZ5IZtalvqlY-aYXXYx

import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search', 
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);