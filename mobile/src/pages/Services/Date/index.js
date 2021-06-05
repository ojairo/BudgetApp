import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Picker} from '@react-native-picker/picker'

import {parseISO} from 'date-fns'
import {format} from 'date-fns-tz'

import styles from './styles'
import api from '../../../services/api'


export default function DateService(){
  const navigation = useNavigation()
  const route = useRoute()
  const mode = route.params.mode

  const [idBudget, setIdBudget]= useState('')
  const [services, setServices] = useState([])
  const [name, setName] = useState('')

  const [mouth, setMouth] = useState('01')
  const [day, setDay] = useState('01')
  const [hours, setHours] = useState('08')
  const [minutes, setMinutes] = useState('00')
  

  const [date, setDate] = useState('')

  const [description, setDescripiton] = useState('')
  const [helper, setHelper] = useState(1)

  useEffect(()=>{
    createDateFormatted()
  },[day, mouth])

  useEffect(()=>{
    if(mode === 'up'){
      setServices(route.params.services)
      setDescripiton('Altere a data do serviço:')

      setName(route.params.services.name)
      getDaySepareted(route.params.services.date)
      
    }
    if(mode === 'add'){
      setIdBudget(route.params.budget.id)
      setDescripiton('Informe qual será a data do serviço:')
      setName([route.params.budget.name])
      const dateToday = new Date()
      const getDay = format(dateToday, "dd")
      const getMouth = format(dateToday, "MM")
      setDay(getDay)
      setMouth(getMouth)
    }
  },[])

  function navigateToDash(){
    navigation.navigate('Dashboard')
  }

  function navigateBack(){
    navigation.goBack()
  }

   function createDateFormatted(){
    const dayNumber = parseInt(day) 
    const dayFormat = dayNumber <= 9 ? `0${dayNumber}`: dayNumber

    const dateExtense = `2021-${mouth}-${dayFormat} ${hours}:${minutes}`
    const parsedDate = parseISO(dateExtense)

    setDate(parsedDate)

  }

  function getDaySepareted(date){
    const parsedDate = parseISO(date)
    const getDay = format(parsedDate, "dd")
    const getMouth = format(parsedDate, "MM")

    setDay(getDay)
    setMouth(getMouth)
  } 

  async function dataInsert(){
    if(mode === 'up'){
      let helperBool

      if(helper === 1){
        helperBool = true
      }

      if(helper === 0){
        helperBool = false
      }

      const response = api.put(`/services/up/id/${services.id}`, {
        date,
        helper,
      })
      if(!response){
        return Alert.alert(
          'Serviços',
          'Erro ao atualizar os dados do serviço. Tente novamente.'
        )
      }
      Alert.alert(
        'Serviços',
        'Dados do serviço foram atualizados com sucesso.'
      )
      navigation.navigate('ServiceProfile', {
        services: {
          id: services.id,
        }
      })

    }

    if(mode === 'add'){
      let helperBool = helper === 0 ? false: true
      const response = api.post(`/services/${idBudget}`, {
        date,
        helper: helperBool,
      })
      if(response){
        Alert.alert(
          'Serviços',
          'Dados foram salvos com sucesso!'
        )
        return navigation.navigate('Dashboard')
      }
      return Alert.alert(
        'Serviços',
        'Falha ao salvar os dados.'
      )
    }
  }

  return(
    <View style={styles.containerConfirm}>
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
        <Text style={styles.titleText}>Serviço</Text>
        <Text style={styles.titleDescription}>
          {description}
        </Text>

        <Text style={styles.textClient}>Cliente: {name} </Text>

      </View>

      <View style={styles.dataContent}>
       
        <Text style={styles.text}>Data</Text>

        <View style={styles.dateContent}>
          <TextInput
            placeholder='Dia'
            value =  {day}
            onChangeText = {e => setDay(e)}
            keyboardType= 'numeric'
            style = {styles.day}
            maxLength={2}
          />
          <View style={styles.contentPicker}>
            <Picker
              selectedValue={mouth}
              onValueChange={(itemValue, itemIndex) => setMouth(itemValue)}
              style={styles.mouth}
            >
              <Picker.Item label="Janeiro" value= "01" />
              <Picker.Item label="Fevereiro" value= "02"/>
              <Picker.Item label="Março" value= "03"/>
              <Picker.Item label="Abril" value= "04"/>
              <Picker.Item label="Maio" value= "05"/>
              <Picker.Item label="Junho" value= "06"/>
              <Picker.Item label="Julho" value= "07"/>
              <Picker.Item label="Agosto" value= "08"/>
              <Picker.Item label="Setembro" value= "09"/>
              <Picker.Item label="Outubro" value= "10"/>
              <Picker.Item label="Novembro" value= "11"/>
              <Picker.Item label="Dezembro" value= "12"/>
            </Picker>
          </View>
        </View>

        <Text style={styles.text}>Hora</Text>
        <View style={styles.hourContent}>
      
          <View style={styles.contentHourPicker}>
            <Picker
              selectedValue={hours}
              onValueChange={(itemValue, itemIndex) => setHours(itemValue)}
              style={styles.hours}
              enabled={false}
            >
              <Picker.Item label="8h" value= "08" />
              <Picker.Item label="9h" value= "09"/>
              <Picker.Item label="10h" value= "10"/>
              <Picker.Item label="11h" value= "11"/>
              <Picker.Item label="13h" value= "13"/>
              <Picker.Item label="14h" value= "14"/>
              <Picker.Item label="15h" value= "15"/>
              <Picker.Item label="16h" value= "16"/>
              <Picker.Item label="17h" value= "17"/>
            </Picker>
          </View>

          <View style={styles.contentHourPicker}>
            <Picker
              selectedValue={helper}
              onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}
              style={styles.hours}
              enabled={false}

            >
              <Picker.Item label="00min" value= "00" />
              <Picker.Item label="30min" value= "30"/>

            </Picker>
          </View>
        </View>

        <Text style={styles.text}>Ajudante:</Text>
        <View style={styles.contentHelper}>
          <Picker
            selectedValue={helper}
            onValueChange={(itemValue, itemIndex)=>setHelper(itemValue)}
            style={styles.helper}
          >
            <Picker.Item label='Sim' value={1}/>
            <Picker.Item label='Não' value={0}/>
          </Picker>
        </View>
        <View style={styles.contentButton}>
          <TouchableOpacity 
            style={styles.buttonFinish}
            onPress={()=>dataInsert()}
          >
            <Feather name='check' size={22} color='#FFF'/>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.buttonBack}
            onPress={()=>navigateBack()}

          >
            <Feather name='chevron-left' size={22} color='#0679A4'/>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}