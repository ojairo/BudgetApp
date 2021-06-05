import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  containerConfirm:{
    flex: 1,
    
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  title: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textClient:{
    fontWeight: 'bold',
    color: '#0679A4',
  },

  titleText:{
    color: '#019AD4',
    fontWeight: 'bold',
    fontSize: 35,
  },

  titleDescription:{
    color: '#019AD4',
    fontSize: 20,
    marginTop: 5,
  },

  dataContent:{
    flex: 1,
    backgroundColor: '#019AD4',
    
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    
    padding: 24,
    
    alignItems:'center',

  },

  input:{
    backgroundColor: 'white',
    width: 280,
    height: 55,
    borderRadius: 100,
    paddingHorizontal: 24,
    color: '#000',
    fontSize: 16,
    marginTop: 25,
  },  

  text: {
    width: 280,
    color: '#fff',
    marginTop: 10,

    fontSize: 18,
    fontWeight: 'bold',
  },

  contentButton:{
    flex: 1,
    width: 280,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },

  buttonFinish: {
    marginLeft: 10,
    marginTop: 30,
    padding: 20,
    backgroundColor: '#0679A4',
    borderRadius: 50,

  },

  buttonBack: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 50,

  },

  contentButtonDate:{
    width: 280,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between'
  },

  buttonDate: {
    borderRadius: 50,
    width:120,
    padding: 15,
    backgroundColor: '#0679A4',
    alignItems: 'center',
  },

  textButton:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  dateContent:{
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  day:{
    width: 100,
    height: 55,
    backgroundColor: '#FFF',
    color: '#000',
    fontSize: 16,

    marginTop: 15,
    borderRadius: 50,
    paddingHorizontal: 24,
  },

  contentPicker:{
    backgroundColor: '#FFF',
    marginTop: 15,
    width: 160,
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 50,
  },

  mouth:{
    width: 150,
    height: 55,
    color: '#000',
  },

  hourContent:{
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  contentHourPicker:{
    backgroundColor: '#FFF',
    marginTop: 15,
    width:130,
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 50,
  },

  hours:{
    width: 120,
    height: 55,
    color: '#000',
  },

  contentHelper:{
    backgroundColor: 'white',
    height: 55,
    width: 280,
    marginTop: 15,
    paddingHorizontal: 12,
    borderRadius: 50,
  
  },

  helper:{
    color: '#000',
    width: 270,
    height: 55,
  },

})