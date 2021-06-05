import React, {useRef, useState} from 'react'
import {Feather} from '@expo/vector-icons'
import {View, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {Modalize} from 'react-native-modalize'
import {verifyModal} from '../../services/ModalizeVerif'

import styles from './styles'


export default function Dashboard(){
  const [modal, setModal] = useState('')
  const modalizeRef = useRef(null)
  const navigation = useNavigation()

  function onOpen(verify){
    setModal(verify)
    modalizeRef.current?.open()
  }

  function navigateToLogin(){
    navigation.navigate('Login')
  }

  return (
    
    <View style ={styles.containerDashboard}>
      <View style={styles.header}>
        <Feather name="github" size={60} color='#019AD4'/>
        <TouchableOpacity onPress={()=>navigateToLogin()}>
          <Feather name="log-out" size={28} color='#019AD4'/>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Feather name="grid" size={60} color='#019AD4'/>
        {/* <Image source={dashIcon}/> */}
        <Text style={styles.titleText}>Dashboard</Text>
        <Text style={styles.titleDescription}>
          Selecione o que deseja.
        </Text>
      </View>


      <View style={styles.functions}>
          
        <TouchableOpacity 
          style={styles.budgets} 
          onPress={()=> onOpen('budget')}
        >
          <Text style={styles.budgetIcon}>Or</Text>
          <Text style={styles.budgetText}>
            Orçamentos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.services}
          onPress={()=> onOpen('service')}
        >
          <Text style={styles.serviceIcon}>Sv</Text>
          <Text style={styles.serviceText}>
            Serviços
          </Text>
        </TouchableOpacity>
          
      </View>

      <Modalize
        ref={modalizeRef}
        snapPoint={300}
      >
        {verifyModal(modal)}
      </Modalize>
    </View>
  )
}