import React from 'react';
import { Text } from 'react-native';
import { stylesGeneral } from '../styles';

const FullDetailsTitle = ({ title }) => {
    return <Text style={[stylesGeneral.title, stylesGeneral.alignText]}>{title}</Text>
}

export default FullDetailsTitle