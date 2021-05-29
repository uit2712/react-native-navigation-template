import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamsList } from './route-params';
import { Text, TouchableOpacity, View } from 'react-native';
import { FirstScreenNavigationProp } from './navigation-props';
import { SecondScreenRouteProp } from './route-props';

const StackNavigator = createStackNavigator<RootStackParamsList>();

function FirstScreen() {
    const navigation = useNavigation<FirstScreenNavigationProp>();

    return (
        <View>
            <Text>First screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Second', {
                count: 333,
            })}>
                <Text>Go to second screen</Text>
            </TouchableOpacity>
        </View>
    )
}

function SecondScreen() {
    const route = useRoute<SecondScreenRouteProp>();

    return (
        <View>
            <Text>Second screen</Text>
            <Text>{route.params.count}</Text>
        </View>
    )
}

function MyNavigator() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName='First'>
                <StackNavigator.Screen
                    name='First'
                    component={FirstScreen}
                />
                <StackNavigator.Screen
                    name='Second'
                    component={SecondScreen}
                />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default MyNavigator;