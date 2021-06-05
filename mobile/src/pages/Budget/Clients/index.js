import React, {useState, useEffect, useRef} from 'react'
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Alert} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {TextInputMask} from 'react-native-masked-text'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import {verifyClient} from '../../../utils/verifyClient'

import api from '../../../services/api'
import styles from './styles'

export default function Clients(){
  const navigation = useNavigation()
  const route = useRoute()
  const budget = route.params.budget

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('SP')
  const [phone, setPhone] = useState('')
  const phoneRef = useRef(null)

  let verify

  const [icon, setIcon] = useState('')
  const [modeCli, setModeCli] = useState('')

  useEffect(()=>{
    if(budget.id !== 0){
      setIcon('save')
      setModeCli('att')
      setName(budget.name)
      setAddress(budget.address)
      setCity(budget.city)
      setUf(budget.uf)
      setPhone(budget.phone)
    }
    else{
      setIcon('chevron-right')
      setModeCli('next')
    }
  },[])

  function checkDatas(){
    const checkPhone = phoneRef?.current.isValid()
    const phoneLength = phoneRef?.current.getRawValue()
    
    if(checkPhone && phoneLength.length >= 11){
      verify = verifyClient({
        data: {
          name, 
          address,
          city,
          uf,
        }
      })
      if(verify === 1){
        return modeClient()
      }
      return Alert.alert(
        'Atenção',
        'Dados inválidos. Por favor, tente novamente.'
      )
    }
    return Alert.alert(
      'Atenção',
      'Número de telefone inválido. Tente novamente.'
    )

  }
  async function modeClient(){
    if(modeCli === 'att'){
      const {data} = await api.put(`budget/up/user/${budget.id}`, {
        name,
        address,
        city,
        uf,
        phone: phoneRef?.current.getRawValue(),
      })
      if(!data){
        alert('Falha ao atualizar os dados')
      }
      return navigation.navigate('Finish', {
        id: budget.id,
        data,
        title: 'Dados atualizados com sucesso!',
        desc: `O(s) dado(s) do cliente ${name} foi/foram atualizados com sucesso!`
      })
    }
    if(modeCli === 'next'){
      return navigation.navigate('Date', {
        mode: 'add',
        name,
        address,
        city,
        uf,
        phone: phoneRef?.current.getRawValue()
      })
    }
    return
  }

  function navigateToDash(){
    navigation.navigate('Dashboard')
  }

  function navigateBack(){
    navigation.goBack()
  }

  return(
    <View style={styles.containerClient}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigateToDash()}>
          <Feather name="github" size={60} color='#019AD4'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigateBack()}>
          <Feather name="arrow-left" size={28} color='#019AD4'/>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Feather name="user" size={60} color='#019AD4'/>
        {/* <Image source={dashIcon}/> */}
        <Text style={styles.titleText}>Cliente</Text>
        <Text style={styles.titleDescription}>
          Digite os dados do cliente.
        </Text>
      </View>

      <View style={styles.dataClient}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding': 'height'}
        >
          
          <ScrollView>
            <View style={styles.superInput}>
              <TextInput 
                style={styles.input}
                placeholder='Nome'
                value={name}
                onChangeText={e => setName(e)}
                
              />
              <TextInput 
                style={styles.input}
                placeholder='Rua Joaquim Procópio, 1248'
                value={address}
                onChangeText={e => setAddress(e)}
              />
              <View style={styles.inputGroup}>
                <TextInput 
                  style={styles.inputCity}
                  placeholder='Cidade'
                  value={city}
                  onChangeText={e => setCity(e)}
                />              
                <View style={styles.contentUfPicker}>
                  <Picker
                    selectedValue={uf}
                    onValueChange={(itemValue, itemIndex) => setUf(itemValue)}
                    style={styles.uf}
                  >
                    <Picker.Item label="SP" value= "SP" />
                    <Picker.Item label="RJ" value= "RJ"/>
                    <Picker.Item label="MG" value= "MG"/>
                    <Picker.Item label="ES" value= "ES"/>
                  </Picker>
                </View>
              </View> 

              <TextInputMask
                style= {styles.inputPhone}
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask:'(99) ',

                }}
                value={phone}
                onChangeText={e => setPhone(e)}
                placeholder='(19) 9999-9999'
                ref={phoneRef}
              />
              <View style={styles.buttons}>
                <TouchableOpacity 
                  style={styles.buttonBack}
                  onPress={()=> navigateBack()} 
                >
                  <Feather 
                    name='chevron-left' 
                    size={22} 
                    color='#019AD4'
                  />
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.buttonNext}
                  onPress={() => checkDatas()}
                >
                  <Feather 
                    name={icon} 
                    size={22} 
                    color='#fff'/>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}