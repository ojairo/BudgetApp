import React, {useState} from 'react'
import { Alert } from 'react-native'

export function verifyClient({data}){
  const name = data.name
  const address = data.address
  const city = data.city
  const number = data.number

  let verifyC = true
  
  if(name === ''){
    verifyC = false
  }

  if(address === ''){
    verifyC = false
  }

  if(city === ''){
    verifyC = false
  }
  if(number === ''){
    verifyC = false
  }

  if(verifyC){
    return 1
  }

  else if(!verifyC){
    return 0
  }


}