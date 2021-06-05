import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Picker} from '@react-native-picker/picker'

import api from '../../../services/api'

import styles from './styles'

export default function Clients(){

  const navigation = useNavigation()
  const route = useRoute()

  const budget = route.params.budget

  const [backupFootage, setBackupFootage] = useState(0)
  const [footage, setFootage] = useState('0')
  const [firstMeasure, setFirstMeasure] = useState('')
  const [secondMeasure, setSecondMeasure] = useState('')
  const [valueFootage, setValueFootage] = useState('')

  useEffect(()=>{
    calcFootage()
  },[firstMeasure, secondMeasure])

  function verify(){
    if(footage !== '0' && valueFootage !== '0' && valueFootage !== ''){
      return updateValues()
    }
    return Alert.alert(
      'Atenção',
      'Existem campos em branco ou inválidos, verifique-os e tente novamente.'
    )
  }

  async function updateValues(){
    const valorF = parseFloat(valueFootage)
    const value = footage * valorF

    const {data} = await api.put(`budget/up/budget/${budget.id}`, {
      typeService: budget.typeService,
      date: budget.date,
      footage,
      value,  

    })

    if(!data){
      return 
    }

    
    navigation.navigate('Finish', {
      id: budget.id,
      data,
      title: 'Orçamento cadastrado com sucesso!',
      desc: `O orçamento para o cliente ${budget.name} foi cadastrado com sucesso!`
    })
  }

  function navigateToDash(){
    navigation.navigate('Dashboard')
  }

  function navigateBack(){
    navigation.goBack()
  }

  function calcFootage(){
    if((firstMeasure !== '0' && firstMeasure !== '')&&(secondMeasure !== '0' && secondMeasure !== '')){

      let fMeasureConv = parseFloat(firstMeasure)
      let sMeasureConv = parseFloat(secondMeasure)

      let res = fMeasureConv*sMeasureConv
      if(backupFootage !== 0){
        const newValue = backupFootage+res
        
        return setFootage(newValue.toFixed(2))
      }
      
      setFootage(String(res.toFixed(2)))
    }
    
    return 
    
  }

  function newMeasure(){
    const valueFootage = parseFloat(footage)
    setBackupFootage(valueFootage)
    setFirstMeasure('')
    setSecondMeasure('')
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
        <Feather name="codepen" size={60} color='#019AD4'/>
        {/* <Image source={dashIcon}/> */}
        <Text style={styles.titleText}>Orçamento</Text>
        <Text style={styles.titleDescription}>
          Adicionar as medidas do local. 
          
        </Text>
        <Text style={styles.textClient}>Cliente: {budget.name}</Text>
      </View>

      <View style={styles.dataClient}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding': 'height'}
          style={{alignItems:'center'}}
          
        >
          
          <TouchableOpacity 
            style={styles.buttonAdd}
            onPress={()=>newMeasure()}
          >
            <Feather name='plus' size={25} color='#019AD4'/>
          </TouchableOpacity>
          
          <ScrollView>
            <View style={styles.superInput}>
              
              <View style={styles.contentTypeService}>
                <Picker
                  selectedValue={budget.typeService}
                  onValueChange={(itemValue, itemIndex) => setTypeService(itemValue)}
                  style={styles.typeService}
                  enabled={false}

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
              
              <View style={styles.inputGroup}>
                <TextInput 
                  style={styles.inputRow}
                  placeholder='Medida 1'
                  keyboardType='numeric'
                  value={firstMeasure}
                  onChangeText={e => setFirstMeasure(e)}
                />
                <TextInput 
                  style={styles.inputRow}
                  placeholder='Medida 2:'
                  keyboardType= 'numeric'
                  value={secondMeasure}
                  onChangeText={e => setSecondMeasure(e)}
                />
              </View>

              <View style={styles.inputGroup}>
                <TextInput 
                  style={styles.inputRow}
                  placeholder='Valor m²'
                  keyboardType='numeric'
                  value = {valueFootage}
                  onChangeText={e => setValueFootage(e)}
                />
                <TextInput 
                  style={styles.inputFootage}
                  placeholder='Metros²'
                  value={`${footage} m²`}
                  editable={false}
                />
              </View>
            </View>

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
                onPress={()=>verify()}
              >
                <Feather 
                  name='check' 
                  size={22} 
                  color='#fff'/>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>

    </View>
  )
}