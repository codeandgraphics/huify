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

    constructor(props) {
        super(props)

        Tts.setDefaultLanguage('ru-RU');

        Tts.addEventListener('tts-start', (event) => console.warn("start", event));
        Tts.addEventListener('tts-finish', (event) => console.warn("finish", event));
        Tts.addEventListener('tts-cancel', (event) => console.warn("cancel", event));

        Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    }

    onSpeechStartHandler() {

    }

    onSpeechEndHandler() {
        console.warn('speech end')
    }

    onSpeechRecognized() {
        console.warn('speech recognized')
    }

    onSpeechResultsHandler() {
        console.warn('speech results')
        /* const { value } = event

        if(value.length > 0) {
            console.warn(huify(value[0]).join(' '))
            Tts.speak(huify(value[0]).join(' '))
        }

        Voice.stop() */
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
