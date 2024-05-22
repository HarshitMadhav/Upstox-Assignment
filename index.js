/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import holdingsContainer from './src/containers/HoldingsContainer';

AppRegistry.registerComponent(appName, () => holdingsContainer);
