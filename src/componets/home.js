import components from 'react-native'
import React from 'react'
import Styles from '../../styles'

const home = ({navigation}) => {
  return (
    <components.View style={Styles.ScrollContainer}>
      <components.View ><components.Text style={Styles.Lables}>home</components.Text></components.View>


    <components.View><components.Pressable style={Styles.Button}  onPress={()=>{navigation.navigate('Login')}}>
        <components.Text style={Styles.ButtonText}>Logout</components.Text>
      </components.Pressable></components.View>
    </components.View>
    

  )
}

export default home

