import React, {useState}from 'react'
import Components from '../../ReactNativeElements'
import Styles from '../../styles'

const login = ({navigation}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const handleLogin = (user,pass) => {
    if (user.trim() === "admin" && pass.trim() === "123456") {
      setStatus(true);
      navigation.navigate('Home');
    } else {
      setStatus(false);
    }
    setUsername("");
    setPassword("");

  }

  return (
    <Components.TouchableWithoutFeedback style={Styles.KeyboardAvoidingContainer} onPress={Components.Keyboard.dismiss}> 
    <Components.View style={Styles.LoginContainer}>
      <Components.View style={Styles.Container}>
      <Components.View><Components.Text style={Styles.Lables}>login</Components.Text></Components.View>
        <Components.View><Components.TextInput
          style={Styles.InputFileds}
          value={username}
          type="text"
          placeholder="Enter username..."
          onChangeText={(e) => {
            setUsername(e);
          }}
        /></Components.View>
        <Components.View><Components.TextInput
          style={Styles.InputFileds}
          type="text"
          value={password}
          placeholder="Enter password..."
          onChangeText={(e) => {
            setPassword(e);
          }}
          secureTextEntry={true} 
        /></Components.View>
      <Components.View><Components.Pressable style={Styles.Button} onPress={handleLogin.bind(this, username, password)}>
        <Components.Text style={Styles.ButtonText}>Login</Components.Text>
      </Components.Pressable></Components.View>
      <Components.View>
        {status === true && <Components.Text style={{color: "green"}}>Login Successful!</Components.Text>}
        {status === false && <Components.Text style={{color: "red"}}>Invalid username or password.</Components.Text>}
      </Components.View>
      </Components.View>
    </Components.View>
    </Components.TouchableWithoutFeedback> 
  )
}

export default login



