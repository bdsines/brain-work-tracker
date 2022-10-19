
import { Button, Card, Icon, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, View } from 'react-native';
export default function ProfileComponent() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  

    const onManagedProfilePressed = () => {

       
                alert("Manage Profile - WIP ");
       
    }  

    return (
        <ScrollView>
            <View style={styles.container}>
                <Card>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                            uri:
                                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        Profile Information Goes here..
                    </Text>

                    <Button
                        style={styles.button}
                        
                        onPress={() => onManagedProfilePressed()} title="Manage Profile">
                    </Button>
                    
                </Card>
            </View>
        </ScrollView>

    )
}