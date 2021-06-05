import React, { useState } from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import api from '../../services/api'
import styles from './styles'

export default function ModalizeFinish(params){
  const navigation = useNavigation()

  const [icon, setIcon] = useState('trash-2')
  const budget = params.budgets

  function navigateToDate(){
    Alert.alert(
      'Orçamento',
      'Deseja salvar o orçamento como um serviço:',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },

        {
          text: 'Adicionar',
          onPress: () => navigation.navigate('DateService', {
            budget,
            mode: 'add',
          })
        }
        
      ]
    )
    

  }

  function checkBudget(){
    if(icon === 'trash-2'){
     setIcon('alert-triangle')
    }
    
    if(icon === 'alert-triangle'){
      Alert.alert(
        'Excluir orçamento',
        `Se o orçamento estiver vinculado a um serviço, o próprio também será deletado. Deseja excluir o orçamento para ${budget.name}?`,
        [
          {
            text: 'Cancelar',
            onPress: () => {},
            style: 'cancel',
          },

          {
            text: 'Excluir',
            onPress: () => deleteBudget()
          }
        ] 
      )
    }
  }

  async function deleteBudget(){
    const response = api.delete(`/budget/${budget.id}`)

    if(!response){
      return Alert.alert(
        'Excluir orçamento',
        'Falha ao tentar excluir o orçamento.'
      )
    }

    Alert.alert(
      'Excluir orçamento',
      'O orçamento foi excluído com sucesso!'
    )

    navigation.navigate('Dashboard')
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Gerenciar orçamento:</Text>
        <Text style={styles.description}>Opções para serem tomadas sobre esse orçamento: 
        </Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity 
          style={styles.buttonAdd}
          onPress={()=>navigateToDate()}
        >
          <Feather name='award' size={56} color='#019ad4'/>
        </TouchableOpacity> 

        <TouchableOpacity 
          style={styles.buttonSearch}
          onPress={()=>checkBudget()}
        >
          <Feather name={icon} size={56} color='red'/>
        </TouchableOpacity>        
      </View>

      

    </View>

  )
}