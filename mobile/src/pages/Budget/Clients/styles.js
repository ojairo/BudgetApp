import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  containerClient:{
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
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center'
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

  dataClient:{
    flex: 1,
    backgroundColor: '#019AD4',

    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,

    paddingHorizontal: 24,
    paddingVertical: 15,

    alignItems:'center'
  },

  superInput:{
    justifyContent: 'center',
  },

  input:{
    height: 60,
    width:280,
    paddingHorizontal: 24,
    borderRadius: 100,
    marginTop: 18,

    backgroundColor: '#FFF',
    color: '#000',
    fontSize: 17,

  },

  buttons:{
    width: 280,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 30,
  },

  buttonNext:{
    backgroundColor: '#0679A4',
    borderRadius: 50,
    padding: 20,
    marginLeft: 20,
  },

  buttonBack:{
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 20,
  },

  contentUfPicker:{
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingLeft:24,
    width:100,
    height: 60,
    borderRadius: 50,
  },

  inputGroup:{
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  uf:{
    width: 90,
    height: 55,
    color: '#000',
  },

  inputCity:{
    height: 60,
    width:175,
    paddingHorizontal: 24,
    borderRadius: 100,

    backgroundColor: '#FFF',
    color: '#000',
    fontSize: 17,
  },
  
  inputPhone:{
    marginTop: 18,
    height: 60,
    width:280,
    paddingHorizontal: 24,
    borderRadius: 100,

    backgroundColor: '#FFF',
    color: '#000',
    fontSize: 17,
  },




})