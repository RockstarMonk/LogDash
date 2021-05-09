import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    Button
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SignUpScreen from './SignUpScreen';

import { AuthContext } from '../components/context'

const LoginScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const { Login } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if(val.length >= 8) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
      <View style = {styles.container}>
          <StatusBar backgroundColor='#0a1c2b'/>
        <View style = {styles.header}>
            <Text style = {styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View animation = "fadeInUpBig" style = {styles.footer}>
            <Text style = {[styles.text_footer, {marginTop: -5, marginBottom: 5}]}>Email</Text>
            <View style = {styles.action}>
                <FontAwesome
                    name = "user-o"
                    color = "#04b59b"
                    size = {20}
                />
                <TextInput
                    placeholder = "Your Email"
                    style = {styles.textInput}
                    autoCapitalize = 'none'
                    onChangeText={(val) => textInputChange(val)}          
                />
                {data.check_textInputChange ? 
                <Animatable.View animation = "bounceIn">
                    <Feather
                    name = "check-circle"
                    color = "#04b59b"
                    size = {20}
                />
                </Animatable.View>
                : null}
            </View>
            <Text style = {[styles.text_footer, {marginTop: 20, marginBottom: 5}]}>Password</Text>
            <View style = {styles.action}>
                <Feather
                    name = "lock"
                    color = "#04b59b"
                    size = {20}
                />
                <TextInput
                    placeholder = "Your Password"
                    secureTextEntry = {data.secureTextEntry ? true : false}
                    style = {styles.textInput}
                    autoCapitalize = 'none'
                    onChangeText={(val) => handlePasswordChange(val)}             
                />
                <TouchableOpacity onPress = {updateSecureTextEntry}>
                    {data.secureTextEntry ?
                    <Feather
                        name = "eye-off"
                        color = "grey"
                        size = {20}
                    />
                    :
                    <Feather
                        name = "eye"
                        color = "#04b59b"
                        size = {20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={{color: '#04b59b', marginTop:10, fontSize: 16, textAlign: 'right'}}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {[styles.login, {marginTop: 40, marginBottom: 5}]}
                onPress = {() => Login()}
            >
                <Text style = {styles.textSign}>
                    LOGIN
                </Text>
            </TouchableOpacity>
            <Text style = {{fontSize: 15, marginTop: 5, marginBottom: -15, textAlign: 'center'}}>OR</Text>
            <TouchableOpacity
                style = {styles.login}
                onPress = {() => navigation.navigate('SignUpScreen')}
            >
                <Text style = {styles.textSign}>
                    SIGN UP
                </Text>
            </TouchableOpacity>
        </Animatable.View>
      </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#0a1c2b'
    },
    header: {
        flex: 0.7,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: 'center'
    },
    footer: {
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        height: 400,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 45
    },
    text_footer: {
        color: '#000',
        fontSize: 15
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -4,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    login: {
        width: '100%',
        marginTop: 25,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#0a1c2b',
        backgroundColor: '#fff'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold' 
    }
});