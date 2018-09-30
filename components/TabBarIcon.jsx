import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

type Props = { name: string, focused: boolean };
export default function TabBarIcon(props: Props) {
  return (
    <Icon.Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
