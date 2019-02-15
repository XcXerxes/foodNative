import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class SigninScreen extends PureComponent {
  render() {
    return (
      <View>
        <SafeAreaView>
          <Text> SigninScreen </Text>
        </SafeAreaView>
      </View>
    )
  }
}
