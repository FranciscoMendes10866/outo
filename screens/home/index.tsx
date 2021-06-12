import * as React from 'react';
import { Text, View } from 'react-native';

import { useStore } from '../../store'

export default function Home() {
  const username = useStore<string | null>(state => state.username)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      { username !== null ? <Text>Hello {username}!</Text> : null }
    </View>
  );
}
