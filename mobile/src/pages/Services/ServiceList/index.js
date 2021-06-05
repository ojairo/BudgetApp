import React, { useEffect, useState } from 'react'
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {parseISO} from 'date-fns'
import {format} from 'date-fns-tz'

import styles from './styles'
import api from '../../../services/api'
import pt from 'date-fns/locale/pt'

export default function ServiceList(){
  const navigation = useNavigation()
  const [services, setServices] = useState([])

  useEffect(()=>{
    loadServices()
  },[])

  async function loadServices(){
    const response = await api.get('services')
    setServices([...services, ...response.data])
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

  function navigateToServiceProfile(services){
    navigation.navigate('ServiceProfile', {
      services,
    })
  }

  function navigateToDash(){
    navigation.navigate('Dashboard')
  }

  function navigateBack(){
    navigation.goBack()
  }

  return (
    <View style={styles.containerServiceList}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigateToDash()}>
          <Feather name="github" size={60} color='#019AD4'/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigateBack()}>
          <Feather name="arrow-left" size={28} color='#019AD4'/>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Feather name="award" size={60} color='#019AD4'/>
        {/* <Image source={dashIcon}/> */}
        <Text style={styles.titleText}>Serviços</Text>

      </View>
      <View style={styles.serviceContainer}>
        <FlatList 
          data={services}
          keyExtractor={service => String(service.id)}
          showsVerticalScrollIndicator={false}

          renderItem={({item: serviceItem}) => (
            <View style={styles.backService}>
              <View style={styles.user}>
                <Feather name='user' size={18} color='#019AD4'/>
                <View style={styles.nameDate}>
                  <Text style={styles.text}>{formatName(serviceItem.name)}</Text>
                  <Text style={styles.textDate}>{formatDate(serviceItem.date)}</Text>
                </View>
              </View>

              <View style={styles.address}>
                <Feather name='map-pin' size={18} color='#019AD4'/>
                <Text style={styles.text}>{serviceItem.address}</Text>
              </View>
                
              <View style={styles.city}>
                <Feather name='map' size={18} 
                  color='#019AD4'/>
                <Text style={styles.text}>{serviceItem.city}</Text>
              </View>

              <View style={styles.containerButton}>
                <TouchableOpacity onPress={()=>navigateToServiceProfile(serviceItem)}>
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