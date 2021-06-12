import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Home, Settings, Form, Inbox, Discover } from "../screens";

const Tab = createBottomTabNavigator();

export default function DashboardRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { ...styles.tabBar },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIcon}>
              {focused ? (
                <Ionicons name="md-home-sharp" size={24} color="black" />
              ) : (
                <Ionicons name="md-home-outline" size={24} color="gray" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIcon}>
              {focused ? (
                <Ionicons name="compass" size={28} color="black" />
              ) : (
                <Ionicons name="compass-outline" size={28} color="gray" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Form"
        component={Form}
        options={{
          tabBarIcon: () => <Entypo name="plus" size={24} color="gray" />,
          tabBarButton: ({ children, onPress }) => (
            <TouchableOpacity
              onPress={onPress}
              style={{
                ...styles.tabIcon,
                top: -30,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  height: 65,
                  width: 65,
                  borderRadius: 24,
                  elevation: 30,
                }}
              >
                {children}
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIcon}>
              {focused ? (
                <FontAwesome name="inbox" size={26} color="black" />
              ) : (
                <Feather name="inbox" size={26} color="gray" />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIcon}>
              {focused ? (
                <Ionicons name="md-settings" size={24} color="black" />
              ) : (
                <Ionicons name="md-settings-outline" size={24} color="gray" />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    marginHorizontal: 20,
    elevation: 30,
    backgroundColor: "white",
    borderRadius: 60,
    height: 70,
  },
  tabIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
