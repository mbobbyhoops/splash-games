import React, { useState, useEffect } from 'react';
import { Gyroscope } from 'expo-sensors';
import { Center, Text, Heading, Avatar, Box, Button } from 'native-base';

export default function Balance() {

    const [playable, setPlayable] = useState(false)

    const [points, setPoints] = useState()

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);


    const _subscribe = () => {
        setSubscription(
            Gyroscope.addListener(gyroscopeData => {

                const position = {
                    x: gyroscopeData.x.toFixed(2),
                    y: gyroscopeData.y.toFixed(2),
                    z: gyroscopeData.z.toFixed(2)
                }

                if ((position.x - position.y - position.z)){
                    setPoints(
                        <Avatar size={'2xl'} bg="red.500" >
                            L
                        </Avatar>
                    )
                }
                
                else {
                    setPoints(
                        <Avatar size={'2xl'} bg="green.500" >
                            W
                        </Avatar>
                    )
                   
                }


                setData(position);
            })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {



        Gyroscope.getPermissionsAsync().then((result) => {
            Gyroscope.setUpdateInterval(200);
            Gyroscope.isAvailableAsync().then((result) => {
                console.log(" result", result);
                if (result) {
                    _subscribe();
                
                }
                else {
                    setPoints(
                        <Center>
                            <Text>Go Download the App</Text>
                            <Button mt={'3'}> Download</Button>
                        </Center>
                    )
                }
            }).catch((err) => {
                console.log("error", err);

            });
        }).catch((err) => {
            console.log(err)

        });


        return () => _unsubscribe();
    }, []);

    const x = data.x 
    const y = data.y 
    const z = data.z




    return (
        <Center
            _dark={{ bg: "black" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
        >

            <Box >
                {points}
            </Box>
            <Box mt={'10'}>
                {playable}
            </Box>

            <Text color={'amber.300'}> X: {x} </Text>
            <Text color={'emerald.300'}> Y: {y} </Text>
            <Text color={'red.300'}>Z: {z} </Text>



        </Center >




    );
}
