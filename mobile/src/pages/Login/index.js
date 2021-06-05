import React, {useState, useEffect} from 'react'
import {Feather} from '@expo/vector-icons'
import {View, TextInput, TouchableOpacity, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
// import {authUser} from '../../services/auth'
import api from '../../services/api'


export default function Login(){

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const navigation = useNavigation()

  useEffect(()=>{
    setPass('')
  },[])

  function navigateToDash(){
    navigation.navigate('Dashboard')
  }

  async function handleSignIn(){
    try{
      const {data} = await api.post('/session', {user, pass})

      if(data){
        navigateToDash()
      }

    }catch(err){
      Alert.alert('Login', 'Usuário ou senha inválido.')
    }
  }

  return (
    <View style={styles.container}>
      <Feather name="github" size={100} color= '#FFF'/>

      <TextInput
        style={styles.input}
        placeholder='Usuário'
        value={user}
        onChangeText={e => setUser(e)}
      />

      <TextInput
        style={styles.input}
        placeholder='Senha'
        secureTextEntry={true}
        value={pass}
        onChangeText={e => setPass(e)}
      />
      <View style={styles.buttons}>
        <TouchableOpacity 
          style={styles.buttonIn}
          onPress={() => handleSignIn()}
        >
          <Feather name='chevron-right' size={22} color='#fff'/>
        </TouchableOpacity>

      </View>
      
      
    </View>
      
  )
}