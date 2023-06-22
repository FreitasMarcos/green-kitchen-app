
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Categories } from '../Categories/Categories';
import { Home } from '../Home/Home';
import {MoreOption} from '../MoreOption/MoreOption';

const Tab = createMaterialTopTabNavigator();


export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#C5C5C5',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#007500' },
      }}
    >
      <Tab.Screen
        name="  "
        component={Home}
        options={{ tabBarIcon: ()=> <AntDesign name="home" size={24} color="white" /> }}
      />
      <Tab.Screen
        name=" "
        component={Categories}
        options={{ tabBarIcon: ()=> <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="white" />}}
      />
      <Tab.Screen
        name="    "
        component={MoreOption}
        options={{ tabBarIcon: ()=> <Entypo name="dots-three-horizontal" size={24} color="white" />}}
      />
      
    </Tab.Navigator>
  );
}