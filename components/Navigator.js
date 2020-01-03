import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "../screens/Login";
import Home from "../screens/Home";

const Navigator = createStackNavigator({
    Login,
    Home   
}, {
    initialRouteName: "Login"
});
  
  export default createAppContainer(Navigator);