import React from 'react'
import ModalizeBudget from '../components/ModalizeBudget'
import ModalizeService from '../components/ModalizeService'
import ModalizeAdd from '../components/ModalizeAdd'
import ModalizeUpdate from '../components/ModalizeUpdate'
import ModalizeFinish from '../components/ModalizeFinish'

export function verifyModal(verify, object){
  if(verify === 'budget'){
    return (<ModalizeBudget/>)
  }

  if(verify === 'service'){
    return (<ModalizeService/>)
  }
  
  if(verify === 'add'){
    return (<ModalizeAdd budgets={object}/>)
  }

  if(verify === 'finish'){
    return (<ModalizeFinish budgets={object}/>)
  }

  if(verify === 'update'){
    return (<ModalizeUpdate budgets={object}/>)
  }

}