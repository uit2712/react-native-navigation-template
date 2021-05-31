import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Draw1Params } from './config/draw1';
import Stack1Navigator from './components/draw1/stack1';
import Tab1Navigator from './components/draw1/tab1';

const Drawer1 = createDrawerNavigator<Draw1Params>();
function Drawer1Navigator() {
    return (
        <NavigationContainer>
            <Drawer1.Navigator>
                <Drawer1.Screen
                    name='Stack1'
                    component={Stack1Navigator}
                />
                <Drawer1.Screen
                    name='Tab1'
                    component={Tab1Navigator}
                />
            </Drawer1.Navigator>
        </NavigationContainer>
    )
}

export default Drawer1Navigator;