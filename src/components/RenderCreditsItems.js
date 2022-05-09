import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { BASE_IMAGE_URL } from '../constant';


const RenderCreditItems = ({ item }) => {

    return (item?.profile_path ?
        <>
            <View style={[styles.creditImageContainer]} >
                <Image
                    resizeMode="cover"
                    style={styles.creditImage}
                    source={{ uri: `${BASE_IMAGE_URL}${item?.profile_path}` }} />
                <Text style={styles.alignName}>{item?.name} </Text>
            </View>

        </>
        : null
    )
}


const styles = StyleSheet.create({
    creditImageContainer: {
        width: 100,
        height: 100
    },
    creditImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 0.7,
        borderColor: 'white',
        alignSelf: 'center',
    },
    alignName: {
        textAlign: "center"
    }

})


export default RenderCreditItems