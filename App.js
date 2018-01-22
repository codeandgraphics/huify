/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Tts from 'react-native-tts';
import Voice from 'react-native-voice';

import { huify } from "./huify"

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    state = {
        results: [],
    }

    timeout = null

    constructor(props) {
        super(props)

        Tts.setDefaultLanguage('ru-RU');

        Tts.addEventListener('tts-start', (event) => console.warn("start", event));
        Tts.addEventListener('tts-finish', (event) => console.warn("finish", event));
        Tts.addEventListener('tts-cancel', (event) => console.warn("cancel", event));

        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    }

    componentWillUnmount() {
        Voice.removeAllListeners()
        Voice.destroy()
    }


    onSpeechResultsHandler({ value }) {
        this.setState({
            results: value
        })

        if(!this.timeout) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(this.sayResults, 1000)
        }
    }

    sayResults = () => {
        Tts.speak(huify(this.state.results[0]).join(' '))
        Voice.stop()
        this.timeout = null
    }

    handlePress = () => {
        Voice.start('ru-RU');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <TouchableOpacity onPress={this.handlePress}>
                    <Text>Say something</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
