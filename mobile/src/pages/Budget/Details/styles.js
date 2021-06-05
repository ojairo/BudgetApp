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
    marginVertical: 15,
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
    width: '80%',
    textAlign: 'center'
  },

  textClient:{
    fontWeight: 'bold',
    color: '#0679A4',
  },

  dataClient:{
    flex: 1,
    backgroundColor: '#019AD4',
    
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    
    paddingHorizontal: 24,
    
    alignItems:'center',
  },
  
  buttonAdd:{
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
    borderRadius: 50,
    width: '20%',

    marginBottom: 15,
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
    fontSize: 18,

  },

  inputGroup:{
    flexDirection: 'row',
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  inputRow:{
    backgroundColor: '#FFF',
    width: 130,
    height: 60,

    color: '#000',
    fontSize: 18,
    paddingHorizontal: 24,
    borderRadius: 100,

  },

  inputFootage:{
    backgroundColor: '#0679A4',
    width: 130,
    height: 60,

    color: '#FFF',
    fontSize: 18,
    paddingHorizontal: 24,
    borderRadius: 100,

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

  contentTypeService:{
    backgroundColor: 'white',
    height: 55,
    width: 280,
    marginTop: 15,
    paddingHorizontal: 12,
    borderRadius: 50,
  
  },

  typeService:{
    color: '#000',
    width: 270,
    height: 55,
  },

})