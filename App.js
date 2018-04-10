import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import GradeScreen from './screens/GradeScreen';
import NoteScreen from './screens/NoteScreen';
import ScaleScreen from './screens/ScaleScreen';


StatusBar.setBarStyle('light-content');

//setting the header bars for all screens.
export default StackNavigator({
  Grades: GradeScreen,
  Notes: NoteScreen,
  Scales: ScaleScreen
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2a3daa'
    },
    headerTintColor: '#FFF'
  }
});
