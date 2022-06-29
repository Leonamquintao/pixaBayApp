import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/navigator/AppNavigator';
import store from './src/store/store';

const App = () => {
  const {mainContainer} = styles;

  return (
    <SafeAreaProvider style={mainContainer}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle="dark-content"
          />
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
