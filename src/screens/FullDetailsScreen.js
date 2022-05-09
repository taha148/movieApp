import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import FullDetailsTitle from '../components/FullDetailsTitle';
import PercentageReview from '../components/PercentageReview';
import RenderCreditItems from '../components/RenderCreditsItems';
import RenderTapItem from '../components/RenderTapItem';
import { BASE_IMAGE_URL, getLayoutParams } from '../constant';
import { useFetchFullDataByID } from '../hooks/useFetch';
import { stylesGeneral } from '../styles';


const FullFull = ({ route }) => {

    const { loadingFullDetail, fullDetail } = useFetchFullDataByID(route?.params?.id)

    return (
        <>
            {fullDetail?.length ?
                <ScrollView>
                    <View style={styles.mainContainer} >


                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={{ uri: `${BASE_IMAGE_URL}${fullDetail?.[0]?.data?.poster_path}` }}
                            />
                        </View>
                        <Text style={[stylesGeneral.title]}>{fullDetail?.[0]?.data?.title}</Text>
                        <PercentageReview vote={fullDetail?.[0]?.data?.vote_average} />
                        <FullDetailsTitle title={"Overview"} />
                        <Text style={styles.overview}>{fullDetail?.[0]?.data?.overview}</Text>
                        <FullDetailsTitle title={"Genre"} />
                        <View style={styles.subContainer}>
                            <FlatList
                                horizontal
                                data={fullDetail?.[0]?.data?.genres}
                                renderItem={({ item }) =>
                                    <RenderTapItem item={item}
                                        handlePress={() => { }}
                                        active={false} />
                                }
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                nestedScrollEnabled
                            />
                        </View>

                        <FullDetailsTitle title={"Credits"} />
                        <View style={styles.subContainer}>
                            <FlatList
                                data={fullDetail?.[1]?.data?.cast}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) =>
                                    <RenderCreditItems item={item} />
                                }
                                // getItemLayout={(data, index) => (getLayoutParams(data,index))}
                                getItemLayout={getLayoutParams}
                                keyExtractor={item => item.id}
                            />
                        </View>

                    </View>

                </ScrollView>
                :
                <Text>loading</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "95%",
        marginHorizontal: "2%",
        marginVertical: "2%",
        flex: 1,
        height: "100%",
        alignItems: "center",
        paddingBottom: "75%",

    },

    imageContainer: {
        width: "50%",
        height: "60%",
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
        borderRadius: 25,
    },
    subContainer: {
        marginHorizontal: 0,
        marginVertical: 10,
        flexDirection: "row",
    },

    creditImageContainer: {
        width: 100,
        height: 100
    },
    creditImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 0.7,
        borderColor: 'white',
        alignSelf: 'center',
    },
});

export default FullFull