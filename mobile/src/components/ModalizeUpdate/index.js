import React from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'

export default function ModalizeUpdate(params){
  const navigation = useNavigation()

  const budget = params.budgets

  function checkWhereGo(){
    Alert.alert(
      'Alterar dados',
      'Selecione o que deseja alterar:',
      [
        {
          text: 'Data',
          onPress: () => navigateToDate()
        },

        {
          text: 'Metragem',
          onPress:()=> navigateToDetails()
        }
      ]
    )
  }

  function navigateToDate(){
    navigation.navigate('Date', {
      budget,
      mode: 'up'
    })
  }

  function navigateToDetails(){
    navigation.navigate('Details', {
      budget,
    })
  }

  function navigateToClient(){
    navigation.navigate('Clients', {budget})
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Alterar dados:</Text>
        <Text style={styles.description}>Selecione quais dados vai querer alterar: 
        </Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity 
          style={styles.buttonAdd}
          onPress={()=>checkWhereGo()}
        >
          <Feather name='codepen' size={56} color='#019ad4'/>
          <Text style={{fontWeight: 'bold', color: '#019ad4'}}>Dados orçamento</Text>
        </TouchableOpacity> 

        <TouchableOpacity 
          style={styles.buttonSearch}
          onPress={()=>navigateToClient()}
        >
          <Feather name='user' size={56} color='red'/>
          <Text style={{fontWeight: 'bold', color: 'red'}}>Dados do cliente</Text>
        </TouchableOpacity>        
      </View>

      

    </View>

  )
}