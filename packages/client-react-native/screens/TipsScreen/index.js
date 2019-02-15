import React, { PureComponent } from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex: 1;
`
const HeaderText = styled.Text`
  color: ${props => props.theme.primary}
`

export default class TipsScreen extends PureComponent {
  render() {
    return (
      <Wrapper>
        <HeaderText> TipsScreen </HeaderText>
      </Wrapper>
    )
  }
}
