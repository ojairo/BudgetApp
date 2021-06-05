import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {parseISO} from 'date-fns'
import {format} from 'date-fns-tz'


import styles from './styles'
import api from '../../../services/api'
import pt from 'date-fns/locale/pt'

export default function BudgetList(){
  const navigation = useNavigation()
  const [budget, setBudget] = useState([])

  useEffect(()=>{
    loadBudget()
  },[])

  async function loadBudget(){

    const response = await api.get('budget')
    setBudget([...budget,...response.data])
  }

  function formatDate(date){
    const dateFormat = parseISO(date)
    
    const formatDate = format(dateFormat, "dd/MM/yyyy", {
      timeZone: 'America/Sao_Paulo',
      locale: pt
    })

    return formatDate
    
  }

  function formatName(name){
    const [firstName, ] = name.split(' ')

    return firstName
  }

  function navigateToConfirm(id){
    navigation.navigate('Confirm', {
      budget: {
        id
      }
    })
  }

  function navigateToDash(){
    navigation.navigate('Dashboard')
  }

  function navigateBack(){
    navigation.goBack()
  }

  

  return (
    <View style={styles.containerBudgetList}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigateToDash()}>
          <Feather name="github" size={60} color='#019AD4'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigateBack()}>
          <Feather name="arrow-left" size={28} color='#019AD4'/>
        </TouchableOpacity>
        
        
      </View>

      <View style={styles.title}>
        <Feather name="codepen" size={60} color='#019AD4'/>
        {/* <Image source={dashIcon}/> */}
        <Text style={styles.titleText}>Orçamentos</Text>

      </View>
      <View style={styles.serviceContainer}>
         
        <FlatList 
          data={budget}
          keyExtractor={budget => String(budget.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item: budgetItem}) => (
            <View style={styles.backService}>
              <View style={styles.user}>
                <Feather name='user' size={18} color='#019AD4'/>
                <View style={styles.nameDate}>
                  <Text style={styles.text}>{formatName(budgetItem.name)}</Text>
                  <Text style={styles.textDate}>{formatDate(budgetItem.date)}</Text>
                </View>
              </View>

              <View style={styles.address}>
                <Feather name='map-pin' size={18} color='#019AD4'/>
                <Text style={styles.text}>{budgetItem.address}</Text>
              </View>
                
              <View style={styles.city}>
                <Feather name='map' size={18} 
                  color='#019AD4'/>
                <Text style={styles.text}>{budgetItem.city}-SP</Text>
              </View>

              <View style={styles.containerButton}>
                <TouchableOpacity onPress={()=>navigateToConfirm(budgetItem.id)}>
                  <View style={styles.button}>
                    <Feather name='chevron-right' size={18} color='#FFF'/>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

    </View>
  )
}