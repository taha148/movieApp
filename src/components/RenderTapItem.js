import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const RenderTapItem = ({ item, active, handlePress }) => {
    return (
        <TouchableOpacity style={[styles.button, active && styles.selected]} onPress={handlePress}>
            <Text style={active && styles.activeText}>{item?.name}</Text>
        </TouchableOpacity>

    )
};
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: "#afabab8f",
        marginHorizontal: 5,
        marginBottom: 6,

    },
    selected: {
        backgroundColor: "green",
        borderWidth: 0,
        color: "white"
    },

    activeText: {
        color: "white"
    }
});
export default RenderTapItem;