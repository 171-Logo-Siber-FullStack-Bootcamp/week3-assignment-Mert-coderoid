import React, { Component } from "react";
import { View, Text } from "react-native";
import NextPageButton from '../navigator/navigator';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Bu da Details Screen texti</Text>
                <NextPageButton page="UsersScreen" />
            </View>
        )
    }
}