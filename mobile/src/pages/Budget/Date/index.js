import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Picker} from '@react-native-picker/picker'

import {parseISO} from 'date-fns'
import {format} from 'date-fns-tz'

import styles from './styles'
import ptBR from 'date-fns/locale/pt'
import api from '../../../services/api'


export default function DateBudget(){
  const navigation = useNavigation()
  const route = useRoute()
  const mode = route.params.mode
  const [budget, setBudget] = useState([])

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [phone, setPhone] = useState('')

  const [typeService, setTypeService] = useState('Limp. de pedras')

  const [mouth, setMouth] = useState('01')
  const [day, setDay] = useState('01')
  const [hours, setHours] = useState('08')
  const [minutes, setMinutes] = useState('00')
  const [formattedDate, setFormattedDate] = useState('')
  const [date, setDate] = useState('')

  const [icon, setIcon] = useState('')
  const [description, setDescripiton] = useState('')


  useEffect(()=>{
    createDateFormatted()
  },[day, mouth, hours, minutes])

  useEffect(()=>{
    if(mode === 'add'){
      const {name, address, city, uf, phone} = route.params

      setName(name)
      setAddress(address)
      setCity(city)
      setUf(uf)
      setPhone(phone)

      setIcon('check')
      let dayToday = new Date()
      const getDay = format(dayToday, "dd")
      const getMouth = format(dayToday, "MM")
      setDay(getDay)
      setMouth(getMouth)
      
      setDescripiton('Adicione a data do orçamento:')
    }

    if(mode === 'up'){
      setBudget(route.params.budget)
      setTypeService(route.params.budget.typeService)
      setName(route.params.budget.name)

      setIcon('check')
      setDescripiton('Altere a data do orçamento:')

      getDaySepareted(route.params.budget.date)

    }
  },[])

  function getDaySepareted(date){
    const parsedDate = parseISO(date)
    
    const getDay = format(parsedDate, "dd")
    const getMouth = format(parsedDate, "MM")
    
    const getHours = format(parsedDate, "HH")
    const getMin = format(parsedDate, "mm")

    setDay(getDay)
    setMouth(getMouth)
  }

  function navigateToDash(){
    navigation.navigate('Dashboard')
  }

  function navigateBack(){
    navigation.goBack()
  }

   function createDateFormatted(){
    if(day === '' || day === '0'){
      return
    } 
    const dayNumber = parseInt(day) 
    const dayFormat = dayNumber <= 9 ? `0${dayNumber}`: dayNumber

    const dateExtense = `2021-${mouth}-${dayFormat} ${hours}:${minutes}`
    const parsedDate = parseISO(dateExtense)

    setDate(parsedDate)

    const dateFormat = format(parsedDate, "'dia' dd 'de' MMMM', às' HH:mm'h.'", {
      timeZone: 'America/Sao_Paulo',
      locale: ptBR
    })
    return setFormattedDate(dateFormat)
  }

  async function dataInsert(){
    if(mode === 'add'){
      try {
        const {data} = await api.post('budget', {
          name,
          address,
          city,
          uf,
          phone,
          typeService,
          date,
          footage: 0,
          value: 0,

        })

        if(data){
          const response = await api.get(`/budget/user/id/${data}`)

          navigation.navigate('Finish', {
            data: response.data,
            title: 'Orçamento agendado com sucesso!',
            desc: `O agendamento do orçamento de ${typeService} para ${name} foi marcado com sucesso para o ${formattedDate}`,
          })
        }

      } catch (err) {
        console.log(err)
      }
    }

    if(mode === 'up'){
      const response = await api.put(`/budget/up/budget/${budget.id}`, {
        date,
        typeService,
        footage: budget.footage,
        value: budget.value,
      })
      if(!response){
        Alert.alert(
          'Atualizar data',
          'Ocorreu um erro ao atualizar a data do orçamento. Tente novamente.'
        )
      }

      Alert.alert(
        'Atualizar data',
        'A data do orçamento foi alterada com sucesso!'
      )
      return navigation.navigate('Confirm', {
        budgets: budget,
        valid: false,
      })

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
        <Feather name="codepen" size={60} color='#019AD4'/>
        {/* <Image source={dashIcon}/> */}
        <Text style={styles.titleText}>Orçamento</Text>
        <Text style={styles.titleDescription}>
          {description}
        </Text>

        <Text style={styles.textClient}>Cliente: {name}</Text>

      </View>

      <View style={styles.dataContent}>
        <View style={styles.contentTypeService}>
          <Picker
            selectedValue={typeService}
            onValueChange={(itemValue, itemIndex) => setTypeService(itemValue)}
            style={styles.typeService}

          >
            <Picker.Item label="Limp. de pedras" value= "Limp. de pedras" />
            <Picker.Item label="Limp. de pisos" value= "Limp. de pisos"/>
            <Picker.Item label="Limp. de telhados" value= "Limp. de telhados"/>
            <Picker.Item label="Limp. de vidros" value= "Limp. de vidros"/>
            <Picker.Item label="Imperm. de pedras" value= "Imperm. de pedras"/>
            <Picker.Item label="Imperm. de pisos" value= "Imperm. de pisos"/>
            <Picker.Item label="Imperm. de telhados" value= "Imperm. de telhados"/>

          </Picker>
        </View>
       
        <Text style={styles.text}>Data</Text>

        <View style={styles.dateContent}>
          <TextInput
            placeholder='Dia'
            value ={day}
            onChangeText = {e => setDay(e)}
            keyboardType= 'numeric'
            style = {styles.day}
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
              selectedValue={minutes}
              onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}
              style={styles.hours}
            >
              <Picker.Item label="00min" value= "00" />
              <Picker.Item label="30min" value= "30"/>

            </Picker>
          </View>
        </View>
        <View style={styles.contentButton}>
          <TouchableOpacity 
            style={styles.buttonFinish}
            onPress={()=>dataInsert()}
          >
            <Feather name={icon} size={22} color='#FFF'/>
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