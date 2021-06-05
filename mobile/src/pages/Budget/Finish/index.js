import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'

import styles from './styles'

export default function Finish(){

  const navigation = useNavigation()
  const route = useRoute()

  const [budgets] = route.params.data
  const desc = route.params.desc
  const title = route.params.title

  function navigateToConfirm(){
    navigation.navigate('Confirm', {budget: budgets})
  }

  return(
    <View style={styles.containerFinish}>
      <View style={styles.contentHeader}>
        <Feather name='check' size={120} color='#16cf00'/>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {desc}
        </Text>
      </View>
      
      <View style={styles.contentButton}>
        <TouchableOpacity 
          style={styles.button}
          onPress={()=>navigateToConfirm()}
        >
          <Feather name='user' size={22} color='white'/>
        </TouchableOpacity>
      </View>

    </View>
  )
}