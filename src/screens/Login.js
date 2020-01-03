import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginButtonDisabled: false
        };
    }

    onChangeTextUsername = (username) => {
        this.setState({username});
    }

    onChangeTextPassword = (password) => {
        this.setState({password});
    }

    onLogin = async () => {
        this.setState({loginButtonDisabled: true});
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {
                data: {
                    username: this.state.username,
                    password: this.state.password
                }
            });
            if (response.data.token) {
                this.props.navigation.navigate("Home", {token: response.data.token});
            }
        } catch (err) {
            console.error(err);
        }
        this.setState({loginButtonDisabled: false});
    }

    onSignUp = () => {
        this.props.navigation.navigate("SignUp");
    }

    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    cookout
                </Text>
                <Text style={styles.sectionDescription}>
                    grow your local scene
                </Text>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize={"none"}
                    value={this.state.username}
                    onChangeText={this.onChangeTextUsername} />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize={"none"}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={this.onChangeTextPassword} />
                <Button 
                    title="login"
                    disabled={this.state.loginButtonDisabled}
                    onPress={this.onLogin} />
                <Button 
                    title="sign up"
                    onPress={this.onSignUp} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    textInput: { 
        marginTop: 8,
        height: 40, 
        backgroundColor: Colors.white 
    }
});

export default Login;