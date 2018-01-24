import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tela from './Tela';
import Home from './Home';
import {Scene, Router} from 'react-native-router-flux';
import store from './store';
import {Provider} from 'react-redux';
import Badge from './Badge';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="myTabBar" tabs={true} hideNavBar tabBarStyle={styles.tabBarStyle} tabBarPosition={'bottom'}>
            <Scene
              initial
              key="tabHome"
              title="Home">

              <Scene key="home" component={Home} title="Adicionar produtos:" />

            </Scene>

            <Scene
              key="tabTela"
              title="Carrinho"
              icon={Badge}>

              <Scene key="telateste" component={Tela} title="Carrinho" />

            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarStyle: {
    borderTopWidth: .5,
    borderColor: '#b7b7b7',
    backgroundColor: 'white',
    opacity: 1
  }
});
