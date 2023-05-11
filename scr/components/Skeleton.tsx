import { View, Text } from 'react-native'
import { Skel } from 'react-native-ui-skel-expo'
import React from 'react'

const Skeleton = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            {Array.from({ length: 6 }).map((item, index) => (
                <Skel
                    key={index}
                    backgroundColor={'#fff'}
                    height={80}
                    width={370}
                    styles={{ borderRadius: 4, marginTop: 12 }}
                />

            ))}
        </View>
    )
}

export default Skeleton