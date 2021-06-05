import React, {useState, useEffect, useRef} from 'react'
import {Text, View, TouchableOpacity, ScrollView, Linking, Alert} from 'react-native'
import {Modalize} from 'react-native-modalize'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import {format} from 'date-fns-tz'
import {parseISO} from 'date-fns'
 
import {verifyModal} from '../../../services/ModalizeVerif'
import styles from './styles'
import pt from 'date-fns/locale/pt'
import api from '../../../services/api'

export default function Confirm(){
  const route = useRoute()
  const {id} = route.params.budget
  const {value} = route.params.budget

  let measureQuad = ''
  let descValue = '' 

  const [icon, setIcon ] = useState('')
  const [budgets, setBudgets] = useState({})
  const navigation = useNavigation()
  const [hour, setHour] = useState('')
  const [date, setDate] = useState('')
  const [modal, setModal] = useState('')
  
  const modalizeRef = useRef(null)
  const [loading, setLoading]= useState(false)

  useEffect(()=>{
    loadBudgets()
  },[loading])

  async function loadBudgets(){
    const response = await api.get(`/budget/user/id/${id}`)
    setBudgets(response.data[0])
    formatDate(response.data[0].date)
    formatHour(response.data[0].date)
    setterIcon()      
  }

  function onOpen(icon){
    if(icon === 'plus'){
      setModal('add')
    }
    if(icon === 'save'){
      setModal('finish')
    }
    if(icon === 'rotate-cw'){
      setModal('update')
    }
    modalizeRef.current?.open()
  }

  function setterIcon(){
    if(value !== 0){
      return setIcon('save')
    }
    return setIcon('plus')
  }

  function formatValue(value){
    if(value === 0){
      descValue = ''
      return 'Orçamento a fazer.'
    }
    const valueFormat = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
    descValue = 'à vista'
    return valueFormat
  }

  function formatDate(date){
    const dateFormat = parseISO(date)
    const formatDate = format(dateFormat, "dd/MM/yyyy", {
      timeZone: 'America/Sao_Paulo',
      locale: pt
    })
    setDate(formatDate)
  }

  function formatHour(date){
    const dateFormat = parseISO(date)
    const hourFormat = format(dateFormat, "HH:mm'h'", {
      timeZone: 'America/São_Paulo',
      locale: pt
    })
    setHour(hourFormat)
  }

  function formatFootage(footage){
    if(footage === '0'){
      measureQuad = ''
      return 'Orçamento a fazer.'

    }
    measureQuad = 'm²'
    return footage
  }

  function sendMessageWhatsApp(){
    Linking.openURL(`whatsapp://send?phone=55${budgets.phone}`)
  }


  function navigateToDash(){
    navigation.navigate('Dashboard')
  }

  function navigateBack(){
    navigation.goBack()
  }

  return (
    <View style={styles.containerConfirm}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigateToDash()}>
          <Feather name="github" size={60} color='#019AD4'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigateBack()}>
          <Feather name="arrow-left" size={28} color='#019AD4'/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerScroll}>
            <View style={styles.contentData}>
              <View style={styles.userHeader}>
                <Text style={styles.dateText}>{date}</Text>
                <TouchableOpacity onPress={()=>setLoading(!loading)}>
                  <Feather name='refresh-cw' size={22} color='white'/>
                </TouchableOpacity>
              </View>

              <View style={styles.userContent}>
                <Feather style={styles.featherUser} name='user' size={60} color='#0679A4'/>
                <Text style={styles.text}>{budgets.name}</Text>
                <Text style={styles.description}>{budgets.address} - {budgets.city}-SP</Text>
                <Text style={styles.hour}>{hour}</Text>
              </View>
            </View>

            <View style={styles.contentData}>
              <View style={styles.dataHeader}>
                <Feather name= 'credit-card' size={30} color='#0679A4'/>
                <Text style={styles.title}>Valor do serviço</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>{formatValue(budgets.value)}</Text>

                <Text style={styles.descriptionValue}>{descValue}</Text>
                
              </View>

            </View>

            <View style={styles.contentData}>
              <View style={styles.dataHeader}>
                <Feather name= 'codepen' size={30} color='#0679A4'/>
                <Text style={styles.title}>Metragem do serviço</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>{formatFootage(budgets.footage)} </Text>
                <Text style={styles.footageDescrip}>{measureQuad} </Text>
              </View>
            </View>

            <View style={styles.contentData}>
              <View style={styles.dataHeader}>
                <Feather name= 'flag' size={30} color='#0679A4'/>
                <Text style={styles.title}>Tipo de serviço</Text>
              </View>

              <Text style={styles.type}>{budgets.typeService}</Text>
            </View>
          </View>

        </ScrollView>

        <View style={styles.containerButtons}>
          <View style={styles.contentButtonLeft}>

            <TouchableOpacity 
              style={styles.buttonBack}
              onPress={()=>sendMessageWhatsApp()}
            >
              <Feather name='phone' size={22} color='#019ad4'/>
            </TouchableOpacity>
          </View>

          <View style={styles.contentButtonRight}>
            <TouchableOpacity 
              style={styles.buttonFinish}
              onPress={()=>onOpen(icon)}
            >
              <Feather name={icon} size={22} color='white'/>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.buttonBack}
              onPress={()=>onOpen('rotate-cw')}
            >
              <Feather name='rotate-cw' size={22} color='#019ad4'/>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      
      <Modalize
        ref={modalizeRef}
        snapPoint={300}
      >
        {verifyModal(modal, budgets)}
      </Modalize>

    </View>
  )
}