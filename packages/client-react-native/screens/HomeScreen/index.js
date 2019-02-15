import React, { PureComponent } from 'react'
import styled from 'styled-components/native'
import { SectionList, ScrollView } from 'react-native'

const Wrapper = styled.View`
  flex: 1;
`
const StyledScroll = styled.ScrollView`
  flex: 1;
`
const HeaderText = styled.Text`
  color: ${props => props.theme.primary}
`

export default class HomeScreen extends PureComponent {
  render() {
    return (
      <Wrapper>
        <StyledScroll>
          <HeaderText> textInComponent </HeaderText>
        </StyledScroll>
      </Wrapper>
    )
  }
}
