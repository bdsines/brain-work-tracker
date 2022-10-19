
import { ListItem, Text, Icon, Button } from '@rneui/themed'
import { React, useContext } from 'react';
import { ScrollView, View } from 'react-native';

import DataContext from "../../context/DataContext";

export default function SessionRecordingsComponent({session}) {
    console.log("Session Received: ",session);
    return (
        <ScrollView>
            <View>
                {
                    session.sessionRecordings.map((item, i) => (
                        <ListItem key={i}>
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                                <ListItem.Subtitle><Text>Level {item.level} On {item.startedAt}</Text></ListItem.Subtitle>
                                <ListItem.Subtitle><Text> Result: {item.result} Duration {item.duration}</Text></ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                            
                        </ListItem>
                    ))
                }
            </View>
        </ScrollView>

    )
}

