import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import Clients from './pages/Budget/Clients'
import Details from './pages/Budget/Details'
import Confirm from './pages/Budget/Confirm'
import Date from './pages/Budget/Date'
import BudgetList from './pages/Budget/BudgetList'
import Finish from './pages/Budget/Finish'

import ServiceList from './pages/Services/ServiceList'
import ServiceProfile from './pages/Services/ServiceProfile'
import DateService from './pages/Services/Date'

const Stack = createStackNavigator()

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>

        {/* Telas de orçamento */}
        <Stack.Screen name="Clients" component={Clients}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Confirm" component={Confirm}/>
        <Stack.Screen name="Date" component={Date}/>
        <Stack.Screen name="BudgetList" component={BudgetList}/>
        <Stack.Screen name="Finish" component={Finish}/>

        {/* Telas de serviços  */}
        <Stack.Screen name="ServiceList" component={ServiceList}/>
        <Stack.Screen name="ServiceProfile" component={ServiceProfile}/> 
        <Stack.Screen name="DateService" component={DateService}/> 

      </Stack.Navigator>
    </NavigationContainer>
  )
}