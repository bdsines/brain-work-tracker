import React from 'react';
import { View } from 'react-native';
import SessionRecordingsComponent from '../../components/sessions/SessionRecordingsComponent';

export default function SessionRecordingsScreen({route,navigation}) {
    // const {learnerSessions}=useContext(DataContext)
    console.log("parms",route.params);

    const session=route.params;
    return (
        // <></>
        <View>
            <SessionRecordingsComponent session={session}/>
        </View>
    )
}