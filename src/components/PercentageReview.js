import React from 'react';
import { Text } from 'react-native';
import { stylesGeneral } from '../styles';


const PercentageReview = ({ vote, stylesParams }) => <Text style={[stylesParams, stylesGeneral.review]}>{vote * 10}%</Text>


export default PercentageReview