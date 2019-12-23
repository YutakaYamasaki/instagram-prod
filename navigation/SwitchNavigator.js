import * as React from 'react';
import {Ionicons} from 'react-native-vector-icons'
import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// 
const SwitchNavigator = createSwitchNavigator(
	{
        Home: {
            screen: TabNavigator
        },
        Auth: {
		    screen: AuthNavigator
    	},
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(SwitchNavigator);
