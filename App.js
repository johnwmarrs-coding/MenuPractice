import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  Activity  from './drawers/activity/activityDrawer';
import  Account  from './drawers/account/accountDrawer';
import  Diet  from './drawers/diet/dietDrawer';
import  Health  from './drawers/health/healthDrawer';
import  Social  from './drawers/social/socialDrawer';

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      
    },
  }
)


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={ styles.container }>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Activity">
            <Drawer.Screen name="Activity" component={Activity} />
            <Drawer.Screen name="Diet" component={Diet} />
            <Drawer.Screen name="Health" component={Health} />
            <Drawer.Screen name="Social" component={Social} />
            <Drawer.Screen name="Account" component={Account} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}