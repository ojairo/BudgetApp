import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useRoute, useNavigation} from '@react-navigation/native'
import {TextMask} from 'react-native-masked-text'

import styles from './styles'

import {parseISO} from 'date-fns'
import {format} from 'date-fns-tz'
import api from '../../../services/api'

export default function ServiceProfile(){

  const navigation = useNavigation()
  const route = useRoute()
  const {id} = route.params.services
  let service = {}

  const [services, setServices] = useState({})
  const [date, setDate] = useState('')
  const [icon, setIcon] = useState('trash-2')
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    loadDataServices()
  },[loading])

  async function loadDataServices(){
    const response = await api.get(`/services/user/id/${id}`)
    if(response){
      formatDate(response.data[0].date)
      return setServices(response.data[0])
    }
    return 
  }

  function navigateToDate(services){
    navigation.navigate('DateService', {
      services,
      mode: 'up'
    }) 
  }

  function checkDelete(){
    if(icon === 'trash-2'){
      setIcon('alert-triangle')
    }

    if(icon === 'alert-triangle'){
      Alert.alert(
        'Excluir serviço',
        `Deseja excluir serviço para o cliente ${services.name}?`,
        [
          {
            text: 'Cancelar',
            onPress: () => {},
            style: 'cancel',
          },

          {
            text: 'Excluir',
            onPress: () => deleteService(),
          }

        ]
      )
    }
  }

  async function deleteService(){    
    try {
      const response = await api.delete(`/services/${services.id}`)
      if(response){
        Alert.alert(
          'Excluir serviço',
          'Serviço deletado com suceso!'
        )
        setIcon('trash-2')
        setServices(service)
        return navigation.navigate('Dashboard')
      }
    }catch (error) {
      return Alert.alert(
        'Excluir serviço',
        'Falha ao excluir o serviço. Tente novamente.'
      )
    }
    

  }

  function formatDate(dateToFormat){
    const parsedDate = parseISO(dateToFormat)
    const dateFormat = format(parsedDate, "dd/MM/yyyy")
    setDate(dateFormat)
  }


  function navigateToDash(){
    navigation.navigate('Dashboard')
  }

  function navigateBack(){
    navigation.goBack()
  }

  return(
    <View style={styles.containerServiceProfile}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigateToDash()}>
          <Feather name="github" size={60} color='#019AD4'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigateBack()}>
          <Feather name="arrow-left" size={28} color='#019AD4'/>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.containerService}>
          <View style={styles.iconSup}>
            <TouchableOpacity onPress={()=>checkDelete()}>
              <Feather name={icon} size={26} color='red'/>
            </TouchableOpacity>
            <Feather name='user' size={90} color='#019ad4'/>
            <TouchableOpacity onPress={()=>setLoading(!loading)}>
              <Feather name='refresh-cw' size={25} color='#019ad4'/>
            </TouchableOpacity>
          </View>

          
            <View style={styles.textUser}>
              <Text style={styles.userName}>{services.name}</Text>
              <Text style={styles.userCity}>{services.city}/SP</Text>
            </View>

            <View style={styles.details}>
              <Feather name='map-pin' size={26} color='#019ad4'/>
              <Text style={styles.textDetails}> {services.address}</Text>

              <Feather name='calendar' size={26} color='#019ad4'/>
              <Text style={styles.textDate}>{date}</Text>
              <TouchableOpacity onPress={()=>navigateToDate(services)}>
                <Text style={styles.changeDate}>Alterar</Text>
              </TouchableOpacity>
              
              
              <Feather name='flag' size={26} color='#019ad4'/>
              <Text style={styles.textDetails}>{services.typeService}</Text>
              
              <Feather name='phone' size={26} color='#019ad4'/>
              <TextMask
                style={styles.textDetails}
                value={services.phone}
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask:'(99) '
                }}
              />

            </View>

            <View style={styles.grid}>
              <View style={styles.boxMoney}>
                <Feather name='dollar-sign' size={26} color='#019ad4'/>
                <Text style={styles.textMedium}>{Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(services.value)}
                </Text>
              </View>

              <View style={styles.boxMetros}>
                <Feather name='codepen' size={26} color='#019ad4'/>
                <Text style={styles.textMedium}>
                  {services.footage} m²
                </Text>
              </View>

            </View>
          
        </View>
      </View>
    </View>
  )
}