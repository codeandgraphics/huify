/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Speech from 'react-native-speech'
import Voice from 'react-native-voice'

import { huify } from './huify'
import styles from './styles'

export default class App extends Component<{}> {
  state = {
    results: [],
    buttonActive: Voice.isAvailable(),
    isListening: false,
  }

  say = false
  timeout = null

  constructor(props) {
    super(props)

    // Tts.setDefaultLanguage('ru-RU')

    // Tts.addEventListener('tts-start', event => {})
    // Tts.addEventListener('tts-finish', event => {})
    // Tts.addEventListener('tts-cancel', event => {})

    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this)

    setTimeout(() => {
      this.setState({
        buttonActive: true,
      })
    }, 2000)
  }

  componentWillUnmount() {
    Voice.removeAllListeners()
    Voice.destroy()
  }

  onSpeechResultsHandler({ value }) {
    this.setState({
      results: value,
    })

    if (!this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(this.sayResults, 1000)
    }
  }

  sayResults = () => {
    if (this.say) {
      Voice.stop()
      Speech.speak({
        text: huify(this.state.results[0]),
        voice: 'ru-RU',
      })
      this.say = false

      this.setState({
        isListening: false,
      })
    }
    this.timeout = null
  }

  handlePress = () => {
    this.setState(
      {
        isListening: true,
      },
      () => {
        Voice.start('ru-RU')
        this.say = true
      },
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.buttonActive && !this.state.isListening ? (
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text style={styles.text}>Press to huify</Text>
          </TouchableOpacity>
        ) : (
          <Text>Listening...</Text>
        )}
      </View>
    )
  }
}
