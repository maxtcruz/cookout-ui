import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button
} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import axios from "axios";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        };
    }

    onChangeTextUsername = (username) => {
        this.setState({username});
    }

    onChangeTextPassword = (password) => {
        this.setState({password});
    }

    onChangeTextFirstName = (firstName) => {
        this.setState({firstName});
    }

    onChangeTextLastName = (lastName) => {
        this.setState({lastName});
    }

    onChangeTextEmail = (email) => {
        this.setState({email});
    }

    onSignUp = async () => {
        try {
            const response = await axios.post("http://localhost:3001/auth/register", {
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email
                }
            });
            if (response.data.token) {
                this.props.navigation.navigate("Home", {token: response.data.token});
            }
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <View style={styles.sectionContainer}>
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
                <TextInput
                    style={styles.textInput}
                    autoCapitalize={"none"}
                    value={this.state.firstName}
                    onChangeText={this.onChangeTextFirstName} />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize={"none"}
                    value={this.state.lastName}
                    onChangeText={this.onChangeTextLastName} />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize={"none"}
                    value={this.state.email}
                    onChangeText={this.onChangeTextEmail} />
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
    textInput: { 
        marginTop: 8,
        height: 40, 
        backgroundColor: Colors.white 
    }
});

export default SignUp;