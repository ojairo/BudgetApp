import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'

export default function ModalizeService(){
  const navigation = useNavigation()

  function navigateToNew(){
    navigation.navigate('BudgetList')
  }

  function navigateToList(){
    navigation.navigate('ServiceList')
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Telas de serviço:</Text>
        <Text style={styles.description}>Estes são os serviços a serem realizados durante a semana: 
        </Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity 
          style={styles.buttonAdd}
          onPress={()=>navigateToNew()}
        >
          <Feather name='plus' size={56} color='#019ad4'/>
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