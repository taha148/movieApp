import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { BASE_IMAGE_URL } from '../constant';
import { stylesGeneral } from '../styles';
import PercentageReview from './PercentageReview';
import RenderArrayFlatLIst from './RenderArrayFlat';

const ListItem = ({ item, genre, navigation, errorGenre }) => {
    const result = item?.item?.genre_ids?.map(generIds => (genre.genres?.find(genre => genre.id === generIds) || {})?.name)?.filter(Boolean);
    const goToItem = () => navigation.navigate("Details", { id: item?.item?.id })
    return (
        <>
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.imageContainer} onPress={goToItem}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: `${BASE_IMAGE_URL}${item?.item?.poster_path}` }}
                    />
                </TouchableOpacity>

                <View style={styles.details}>
                    <TouchableOpacity onPress={goToItem}>
                        <Text style={[stylesGeneral.fontSizeBold]} numberOfLines={1}>{item?.item?.original_title} </Text>
                        <Text>{item.item.release_date} </Text>
                    </TouchableOpacity>

                    <View style={styles.subContainer}>
                        {!errorGenre?.message ? <FlatList
                            data={result}
                            renderItem={RenderArrayFlatLIst}
                            keyExtractor={result => result}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        /> : null}
                    </View>
                    <PercentageReview stylesParams={styles.textAlignRTL} vote={item?.item?.vote_average} />
                </View>
            </View>

        </>
    )

}

const styles = StyleSheet.create({
    subContainer: {
        marginVertical: "5%",
        flexDirection: "row",
    },
    cardContainer: {
        height: 130,
        marginHorizontal: "2%",
        flexDirection: "row",
        marginBottom: "2%",
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        backgroundColor: "white",
        borderRadius: 5
    },
    imageContainer: {
        width: "25%",
        height: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    details: {
        width: "70%",
        height: "100%",
        marginLeft: "3%"
    },
    textAlignRTL: {
        textAlign: "right",
    }


});

export default ListItem