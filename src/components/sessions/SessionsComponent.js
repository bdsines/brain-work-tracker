
import { ListItem, Text, Icon, Button } from '@rneui/themed'
import { React, useContext } from 'react';
import { ScrollView, View } from 'react-native';
import { navigateToRecordings } from '../../actions';
import DataContext from "../../context/DataContext";

export default function SessionsComponent() {


    const { learnerSessions, setSelectedSession } = useContext(DataContext);
    


    return (
        <ScrollView>
            <View>
                {
                    learnerSessions.map((item, i) => (
                        <ListItem.Swipeable key={i}
                            onPress={()=>navigateToRecordings(item)}
                            bottomDivider
                            leftContent={
                                <Button
                                    title="Info"
                                    icon={{ name: 'info', color: 'white' }}
                                />
                            }
                            rightContent={
                                <Button
                                    title="Delete"
                                    icon={{ name: 'delete', color: 'white' }}
                                    buttonStyle={{ backgroundColor: 'red' }}
                                />
                            }
                        >
                            {(item.kind === "math" ?
                                <Icon
                                    color="#0CC"
                                    name="calculate"
                                    type="material"
                                /> :
                                <Icon
                                    color="#0CC"
                                    name="notes"
                                    type="material"
                                />
                            )}
                            <ListItem.Content>
                                <ListItem.Title>{item.meta.title}</ListItem.Title>
                                <ListItem.Subtitle><Text>Latest Session On {item.meta.latestSessionAt} Duration {item.meta.latestDurationSec}</Text></ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem.Swipeable>
                    ))
                }
            </View>
        </ScrollView>

    )
}

