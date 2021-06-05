import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import api from '../../services/api'

import styles from './styles'

export default function ModalizeAdd(params){
  const navigation = useNavigation()
  const [icon, setIcon] = useState('trash-2')

  const budget = params.budgets
  function navigateToNew(){
    navigation.navigate('Details', {budget})
  }

  function deleteBudget(){
    if(icon === 'alert-triangle'){
     api.delete(`/budget/${budget.id}`)
     alert(`Os dados do cliente ${budget.name} foram apagados com sucesso!`)
     return navigation.navigate('Dashboard')
    }
    
    return setIcon('alert-triangle')
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Adicionar os dados:</Text>
        <Text style={styles.description}>Você pode adicionar os dados faltantes ou deletar o orçamento:
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
          onPress={()=>deleteBudget()}
        >
          <Feather name={icon} size={56} color='red'/>
        </TouchableOpacity>        
      </View>

      

    </View>

  )
}