import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RenderArrayFlatLIst = (props) => {
    const { item } = props
    return (
        <View style={[styles.button]} >
            <Text >{item}</Text>
        </View>

    )
};
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
        backgroundColor: "#afabab8f",
        marginHorizontal: 5,
        marginBottom: "1%",
        textAlign: "center",

    },
});
export default RenderArrayFlatLIst;