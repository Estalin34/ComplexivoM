import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreem from '../screens/RegisterScreem';
import ApiScreen from '../screens/ApiScreen';
import IngresarScreen from '../screens/IngresarScreen';
import DetallesIngreso from '../screens/DetallesIngresoScreen';
import EditarScreen from '../screens/EditarScreen';

const Stack=createStackNavigator();
const Drawer =createDrawerNavigator();

function MyStack(){
return <Stack.Navigator initialRouteName='Welcome'>
    <Stack.Screen name='Login'component={LoginScreen}/>
    <Stack.Screen name='Welcome' component={WelcomeScreen}/>
    <Stack.Screen name='Register'component={RegisterScreem}/>
    <Stack.Screen name='Api'component={ApiScreen}/>
    <Stack.Screen name='Ingresar'component={IngresarScreen}/>
    <Stack.Screen name='Drawer'component={MyDrawer}/>

</Stack.Navigator>
}
function MyDrawer (){
    return <Drawer.Navigator initialRouteName='Ingresar'>
      <Drawer.Screen name='Api' component={ApiScreen}/>
      <Drawer.Screen name='Ingresar' component={IngresarScreen}/>
      <Drawer.Screen name='DetallesIngreso'component={DetallesIngreso}/>
      <Drawer.Screen name='Editar' component={EditarScreen}/>
        </Drawer.Navigator>
}
export default function Mainnavigator() {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})