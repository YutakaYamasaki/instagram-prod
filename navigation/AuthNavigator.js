import * as React from 'react';
import {Ionicons} from 'react-native-vector-icons'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// 


const SwitchNavigator = createStackNavigator({
	Login: {
		screen: Login
	},
    Signup: {
		screen: Signup
	},
});

export default createAppContainer(SwitchNavigator);
