import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './tabs/homeTab'
import CalendarTab from './tabs/calendarTab'

const Tab = createBottomTabNavigator();

const Activity = () => {
  return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeTab}/>
          <Tab.Screen name="Calendar" component={CalendarTab}/>
      </Tab.Navigator>
  )
}
export default Activity;