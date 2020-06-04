import React, { Component } from 'react';
import { ActivityIndicator, Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'powderblue',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container1: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

class Blink extends Component {

    componentDidMount() {
        // Toggle the state every second
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000);
    }

    //state object
    state = { isShowingText: true };

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>Hello {this.props.name}!</Text>
                <Text>Welcome to Awesome App!</Text>
            </View>
        );
    }
};

export default class Test extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = { text: '', isLoading: true };
    }

    componentDidMount() {
        this._isMounted = true;

        return fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                if (this._isMounted) {
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson.movies,
                    }, function () {

                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _onPressButton() {
        alert('You tapped the button!')
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        let pic1 = {
            // uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            uri: "https://reactnative.dev/img/tiny_logo.png"
        };

        let pic2 = './assets/images/logo.jpg';

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center' }}>
                    <Greeting name='John' />
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <Text style={{ padding: 10, fontSize: 42 }}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>
                <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                        keyExtractor={({ id }, index) => id}
                    />
                </SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="Press Me"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="Press Me"
                            color="#841584"
                        />
                    </View>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="This looks great!"
                        />
                        <Button
                            onPress={this._onPressButton}
                            title="OK!"
                            color="#841584"
                        />
                    </View>
                </View>
                <View style={{ flex: 3, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.red}>just red</Text>
                    <Text style={styles.bigBlue}>just bigBlue</Text>
                    <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                    <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
                    <Blink text='I love to blink' />
                    <Blink text='Yes blinking is so great' />
                    <Blink text='Why did they ever take this out of HTML' />
                    <Blink text='Look at me look at me look at me' />
                </View>
                <SafeAreaView style={styles.container1}>
                    <FlatList
                        data={[
                            { key: 'Devin' },
                            { key: 'Dan' },
                            { key: 'Dominic' },
                            { key: 'Jackson' },
                            { key: 'James' },
                            { key: 'Joel' },
                            { key: 'John' },
                            { key: 'Jillian' },
                            { key: 'Jimmy' },
                            { key: 'Julie' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </SafeAreaView>
            </ScrollView>
        );
    }
}
