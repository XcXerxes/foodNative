import React, { PureComponent } from 'react'
import styled from 'styled-components/native'
import { AsyncStorage, ActivityIndicator } from 'react-native'

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
`
const StyledText = styled.Text`
  font-size: 14px;
  color: #fff;
`

export default class AuthLoadingScreen extends PureComponent {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }
  _bootstrapAsync = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken')
      setTimeout(() => {
        this.props.navigation.navigate(token ? 'Main' : 'Auth')
      }, 500)
    } catch (error) {
      throw error
    }
  }
  render() {
    return (
     <StyledView>
       <ActivityIndicator size="large" color="#fff" />
     </StyledView>
    )
  }
}
