import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            firstName: "",
            lastName: "",
            email: ""
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:3001/user/me", {
                headers: {
                    "Authorization": `Bearer ${this.props.navigation.getParam("token", "")}`
                }
            });
            this.setState({
                id: response.data._id,
                username: response.data.username,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email
            });
        } catch (err) {
            console.error(err);
        }
    }

    onLogOut = async () => {
        try {
            await AsyncStorage.removeItem("authToken");
            this.props.navigation.navigate("Login");
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>{`id: ${this.state.id}`}</Text>
                <Text style={styles.sectionDescription}>{`username: ${this.state.username}`}</Text>
                <Text style={styles.sectionDescription}>{`first name: ${this.state.firstName}`}</Text>
                <Text style={styles.sectionDescription}>{`last name: ${this.state.lastName}`}</Text>
                <Text style={styles.sectionDescription}>{`email: ${this.state.email}`}</Text>
                <Button 
                    title="logout"
                    onPress={this.onLogOut} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
});

export default Home;