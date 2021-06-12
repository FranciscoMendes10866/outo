import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes, DashboardRoutes } from './routes'
import { useStore } from "./store";

export default function App() {
  const username = useStore<string | null>((state) => state.username);
  return (
    <NavigationContainer>
      { username === null ? <AuthRoutes /> : <DashboardRoutes /> }
    </NavigationContainer>
  );
}
