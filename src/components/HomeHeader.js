import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TAPS_DATA } from '../constant';
import { stylesGeneral } from '../styles';
import RenderTapItem from './RenderTapItem';

const HomeHeader = ({ handlePress, tabSelected }) => {

    return (<>
        <Text style={[stylesGeneral.containerMargin, stylesGeneral.fontSizeBold]}>Movies</Text>
        <View style={styles.subContainer}>
            <FlatList
                horizontal
                data={TAPS_DATA}
                renderItem={({ item }) =>
                    <RenderTapItem item={item}
                        handlePress={() => handlePress(item)}
                        active={tabSelected.name === item?.name} />
                }
                keyExtractor={item => item.name}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    </>)

}

const styles = StyleSheet.create({
    subContainer: {
        marginVertical: "2%",
        flexDirection: "row",
        textAlign: "center",
    },
});

export default HomeHeader
