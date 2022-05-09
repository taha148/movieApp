import React, { useState, useCallback } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import ListItem from '../components/ListItem';
import { TAPS_DATA, getLayoutParams } from '../constant';
import { useFetch, useFetchGenre } from '../hooks/useFetch';
import { stylesGeneral } from '../styles';

const HomeScreen = ({ navigation }) => {

    const [tabSelected, setTabSelected] = useState(TAPS_DATA[0])
    const { loading, response, error } = useFetch(tabSelected?.nameAPI, tabSelected.pageNumber);
    const { genre, errorGenre } = useFetchGenre();

    if (error?.message) return <>
        <HomeHeader handlePress={setTabSelected} tabSelected={tabSelected} />
        <Text>{error?.message}</Text>
    </>
    const keyExtractorUseCallBack = useCallback((item) => item.id, [])
    return (
        <View style={[, styles.mainContainer, stylesGeneral.containerMargin]}>
            <HomeHeader handlePress={setTabSelected} tabSelected={tabSelected} />
            {!loading ? <FlatList
                data={response?.results}
                renderItem={(item) => <ListItem item={item} genre={genre} navigation={navigation} errorGenre={errorGenre} />}
                keyExtractor={keyExtractorUseCallBack}
                showsVerticalScrollIndicator={false}
                onEndReached={() => tabSelected.pageNumber < 3 && setTabSelected({ ...tabSelected, pageNumber: tabSelected.pageNumber + 1 })}
                getItemLayout={getLayoutParams}
                windowSize={30}
                maxToRenderPerBatch={8}
            /> : <Text>loading</Text>}
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingBottom: "25%",

    },
});


export default HomeScreen