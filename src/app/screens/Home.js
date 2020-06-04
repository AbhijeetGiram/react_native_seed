import React, { Component } from 'react';
import { ActivityIndicator, Alert, BackHandler, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Club extends Component {

    endpoint = 'http://localhost:8080/api/';
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = { isLoading: true, clubs: [] };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        this.setState({
            isLoading: false
        }, () => { });

        this._isMounted = true;

        // TODO update below with get clubs by user id
        // return fetch('http://192.168.1.8:8080/api/clubs')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         if (this._isMounted) {
        //             this.setState({
        //                 isLoading: false,
        //                 clubs: responseJson,
        //             });
        //         }
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }

    componentWillUnmount() {
        this._isMounted = false;
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        // navigate('NewScreen');
    }

    handleBackButton = () => {
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            },], {
            cancelable: false
        });
        return true;
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        var clubs = [];
        var clubList = this.state.clubs;

        for (let i = 0; i < 2; i++) {
            clubs.push(
                <View key={i}>
                    <Text style={styles.contentPadding}></Text>
                    <TouchableOpacity style={styles.contentTouchableOpacity}
                        onPress={() => { this.props.navigation.navigate('Club'); }}>
                        <Text style={styles.text}>Club {[i]}</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            // Start home screen container
            <View style={styles.container}>
                {/* Start */}
                <ScrollView style={styles.content}>
                    <Text style={styles.contentPadding}></Text>
                    <Text style={styles.headerText}>Hello World!</Text>
                    <Text style={styles.contentPadding}></Text>
                    <TouchableOpacity style={styles.contentTouchableOpacity}
                        // onPress={() => { this.props.navigation.navigate('Test'); }}>
                        onPress={() => { alert('Click success!') }}>
                        <Text style={styles.text}>Button One</Text>
                    </TouchableOpacity>
                </ScrollView>
                {/* End */}
            </View>
            // End home screen container
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        backgroundColor: 'powderblue',
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        opacity: .9
    },
    header: {
        height: 56,
        paddingTop: 10,
        alignItems: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 50
    },
    content: {
        padding: 20,
        alignSelf: 'center'
    },
    contentTouchableOpacity: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 30
    },
    contentText: {
        color: 'black',
        fontSize: 20,
    },
    contentImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    contentPadding: {
        padding: '40rem',
        alignSelf: 'stretch'
    },
    contentPaddingTop: {
        padding: '5rem',
        paddingTop: '150rem',
        alignSelf: 'stretch'
    },
    text: {
        color: 'black',
        fontSize: 16
    },
})
