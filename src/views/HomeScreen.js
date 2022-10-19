import React from 'react'
import { Text, View } from 'react-native'
import SessionsComponent from '../components/sessions/SessionsComponent'

export default function HomeScreen(props) {
    return (
        <View>
            <Text>Home Screen</Text>
            <SessionsComponent/>
        </View>
    )
}