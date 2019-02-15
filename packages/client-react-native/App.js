import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import AppNavigator from './navigations'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme} >
        <AppNavigator />
      </ThemeProvider>
    );
  }
}
