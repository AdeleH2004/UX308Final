import { AppRegistry } from 'react-native';
import App from './components/App'; // Points to src/components/App.jsx

AppRegistry.registerComponent('main', () => App);
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root')
});