import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Draw1NavigationProp, Draw1Params } from './draw1';
import { Tab1Params } from './draw1/tab1';
import { Stack2Params } from './draw1/tab1/stack2';
import { Tab2Params } from './draw1/tab1/tab2';
import { SecondScreenRouteProp, Stack1NavigationProp, Stack1ParamsList } from './draw1/stack1';

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

const Tab1 = createBottomTabNavigator<Tab1Params>();
function Tab1Navigator() {
    return (
        <Tab1.Navigator>
            <Tab1.Screen
                name='Tab2'
                component={Tab2Navigator}
            />
            <Tab1.Screen
                name='Stack2'
                component={Stack2Navigator}
            />
        </Tab1.Navigator>
    )
}

const Stack2 = createStackNavigator<Stack2Params>();
function Stack2Navigator() {
    return (
        <Stack2.Navigator>
            <Stack2.Screen
                name='Third'
                component={ThirdScreen}
            />
            <Stack2.Screen
                name='Fourth'
                component={FourthScreen}
            />
        </Stack2.Navigator>
    )
}

const Tab2 = createBottomTabNavigator<Tab2Params>();
function Tab2Navigator() {
    return (
        <Tab2.Navigator>
            <Tab2.Screen
                name='Fifth'
                component={FifthScreen}
            />
            <Tab2.Screen
                name='Sixth'
                component={SixthScreen}
            />
        </Tab2.Navigator>
    )
}

const Stack1 = createStackNavigator<Stack1ParamsList>();
function Stack1Navigator() {
    return (
        <Stack1.Navigator initialRouteName='First'>
            <Stack1.Screen
                name='First'
                component={FirstScreen}
            />
            <Stack1.Screen
                name='Second'
                component={SecondScreen}
            />
        </Stack1.Navigator>
    )
}

function FirstScreen() {
    const stack1Nav = useNavigation<Stack1NavigationProp>();
    const drawer1Nav = useNavigation<Draw1NavigationProp>();

    return (
        <View>
            <Text>First screen</Text>
            <TouchableOpacity onPress={() => stack1Nav.navigate('Second', {
                num2: 2,
            })}>
                <Text>Go to second screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                drawer1Nav.navigate('Tab1', {
                    screen: 'Stack2',
                    params: {
                        screen: 'Third',
                        params: {
                            num3: 3,
                        }
                    }
                })
            }}>
                <Text>Go to third screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                drawer1Nav.navigate('Tab1', {
                    screen: 'Stack2',
                    params: {
                        screen: 'Fourth',
                        params: {
                            num4: 4,
                        }
                    }
                })
            }}>
                <Text>Go to fourth screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                drawer1Nav.navigate('Tab1', {
                    screen: 'Tab2',
                    params: {
                        screen: 'Fifth',
                        params: {
                            num5: 5,
                        }
                    }
                })
            }}>
                <Text>Go to fifth screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                drawer1Nav.navigate('Tab1', {
                    screen: 'Tab2',
                    params: {
                        screen: 'Sixth',
                        params: {
                            num6: 6,
                        }
                    }
                })
            }}>
                <Text>Go to sixth screen</Text>
            </TouchableOpacity>
        </View>
    )
}

function SecondScreen() {
    const route = useRoute<SecondScreenRouteProp>();

    return (
        <View>
            <Text>Second screen</Text>
            <Text>{route.params.num2}</Text>
        </View>
    )
}

function ThirdScreen() {
    return (
        <View>
            <Text>Third screen</Text>
            <TouchableOpacity onPress={() => {}}>
                <Text>Go to second screen</Text>
            </TouchableOpacity>
        </View>
    )
}

function FourthScreen() {
    return (
        <View>
            <Text>Fourth screen</Text>
            <TouchableOpacity onPress={() => {}}>
                <Text>Go to second screen</Text>
            </TouchableOpacity>
        </View>
    )
}

function FifthScreen() {
    const drawer1Nav = useNavigation<Draw1NavigationProp>();

    return (
        <View>
            <Text>Fifth screen</Text>
            <TouchableOpacity onPress={() => {
                drawer1Nav.navigate('Stack1', {
                    screen: 'Second',
                    params: {
                        num2: 2,
                    }
                })
            }}>
                <Text>Go to second screen</Text>
            </TouchableOpacity>
        </View>
    )
}

function SixthScreen() {
    return (
        <View>
            <Text>Sixth screen</Text>
            <TouchableOpacity onPress={() => {}}>
                <Text>Go to second screen</Text>
            </TouchableOpacity>
        </View>
    )
}

function SeventhScreen() {
    return (
        <View>
            <Text>Seventh screen</Text>
            <TouchableOpacity onPress={() => {}}>
                <Text>Go to second screen</Text>
            </TouchableOpacity>
        </View>
    )
}

function EigthScreen() {
    return (
        <View>
            <Text>Eigth screen</Text>
            <TouchableOpacity onPress={() => {}}>
                <Text>Go to second screen</Text>
            </TouchableOpacity>
        </View>
    )
}

function NinethScreen() {
    return (
        <View>
            <Text>Nineth screen</Text>
            <TouchableOpacity onPress={() => {}}>
                <Text>Go to second screen</Text>
            </TouchableOpacity>
        </View>
    )
}