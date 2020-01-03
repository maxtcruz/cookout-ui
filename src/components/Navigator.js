import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "../screens/Login";
import Home from "../screens/Home";
import SignUp from "../screens/SignUp";

const Navigator = createStackNavigator({
    Login,
    Home,
    SignUp
}, {
    initialRouteName: "Login",
    headerMode: "none"
});
  
  export default createAppContainer(Navigator);