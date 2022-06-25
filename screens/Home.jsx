import React from "react";

import { Button, Center, VStack, Image, Spacer } from "native-base";
import SplashImage from '../assets/splash-logo.png';


export default function Home() {
    return (
        <Center
            _dark={{ bg: "black" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
        >
            <VStack space={10} alignItems="center" position={'absolute'} top={'20%'}>
                <Image source={SplashImage} alt="Alternate Text" />

                <Spacer />

                <Button p='5' size={'lg'} colorScheme= 'tertiary'> Host a Game</Button>

                <Button p='5' size={'lg'} colorScheme='cyan'> Join a Game</Button>


            </VStack>


        </Center>
    )
}
