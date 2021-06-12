import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Home, Settings, Form } from "../screens";

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
              <Entypo
                name="home"
                size={24}
                color={focused ? "#2455EF" : "gray"}
              />
              <Text
                style={{
                  ...styles.tabText,
                  color: focused ? "#2455EF" : "gray",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Form"
        component={Form}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="plus" size={20} color="white" />
          ),
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
                  backgroundColor: "#F23847",
                  height: 65,
                  width: 65,
                  borderRadius: 8,
                  elevation: 30
                }}
              >
                {children}
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIcon}>
              <Ionicons
                name="md-settings"
                size={24}
                color={focused ? "#2455EF" : "gray"}
              />
              <Text
                style={{
                  ...styles.tabText,
                  color: focused ? "#2455EF" : "gray",
                }}
              >
                Settings
              </Text>
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
    borderRadius: 8,
    height: 70,
  },
  tabIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 12,
    marginTop: 2,
  },
});
