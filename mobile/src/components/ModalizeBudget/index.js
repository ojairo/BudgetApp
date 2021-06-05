import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'

export default function ModalizeBudget(){
  const navigation = useNavigation()

  
  function navigateToList(){
    navigation.navigate('BudgetList')
  }

  function navigateToNew(){
    const budget = {
      id: 0
    }
    navigation.navigate('Clients', {budget})
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Telas de orçamento:</Text>
        <Text style={styles.description}>Escolha se desejas procurar ou adicionar um novo orçamento.</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity 
          style={styles.buttonAdd}
          onPress={()=>navigateToNew()}
        >
          <Feather name='user-plus' size={56} color='#019ad4'/>
        </TouchableOpacity> 

        <TouchableOpacity 
          style={styles.buttonSearch}
          onPress={()=>navigateToList()}
        >
          <Feather name='search' size={56} color='#019ad4'/>
        </TouchableOpacity>        
      </View>    
    </View>

  )
}