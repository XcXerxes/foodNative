import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { Platform } from 'react-native'

const AuthLoadingStack = createStackNavigator({
  AuthLoading: {
    getScreen: () => require('../screens/AuthLoadingScreen').default,
    navigationOptions: {
      header: null
    }
  }
})

const AuthNavigator = createStackNavigator(
  {
    Sign: {
      getScreen: () => require('../screens/Auth/SigninScreen').default
    },
    Signup: {
      getScreen: () => require('../screens/Auth/SignupScreen').default
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      getScreen: () => require('../screens/HomeScreen').default
    },
    Tips: {
      getScreen: () => require('../screens/TipsScreen').default
    },
    Search: {
      getScreen: () => require('../screens/SearchScreen').default
    },
    ShopList: {
      getScreen: () => require('../screens/ShopListScreen').default
    },
    Profile: {
      getScreen: () => require('../screens/ProfileScreen').default
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        borderBottomWidth: 0
      }
    }
  }
)

const MainNavigator = createStackNavigator(
  {
    Tab: {
      screen: TabNavigator
    }
  }
)

export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingStack,
  Auth: AuthNavigator,
  Main: MainNavigator
}, {
  initialRouteName: 'AuthLoading',
  mode: Platform.OS === 'ios' ? 'modal' : 'card'
}))
