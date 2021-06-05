import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  containerBudgetList:{
    flex: 1,
    paddingHorizontal: 24,
   
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingTop: Constants.statusBarHeight + 20,
  },

  title: {
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleText:{
    color: '#019AD4',
    fontWeight: 'bold',
    fontSize: 35,
  },

  refresh:{
    marginBottom: 15,
    marginTop: 5,
  },

  viewInput:{
    backgroundColor: '#f9f9f9',
    width: 280,
    height: 60,

    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#019AD4',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },

  input:{
    backgroundColor: 'transparent',
    height: 40,
    width: 200,
    zIndex:1,
    color: '#000',
    fontSize: 18,
  },

  serviceContainer:{
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },

  backService:{
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 5,
    width: 320,
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderColor: 'rgba(0,0,9,0.1)',
    borderRadius: 15,

    marginVertical: 10,
  },

  user:{
    width: 320,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems:'center',
    marginTop: 5,
  },

  nameDate:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 24,
    width: '100%'
  },

  textDate:{
    marginLeft: 30,
    color:'#019AD4',
    fontWeight: 'bold',
    fontSize: 18,
  },

  address:{
    width: 320,
    marginTop: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
  },


  city:{
    width: 320,
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 24,
  },

  containerButton:{
    width: 320,
    paddingHorizontal: 28,
    alignItems: 'flex-end',
    marginBottom: 5,
  },

  button:{
    width: 50,
    padding: 15,
    alignItems: 'center',
    marginTop: -25 ,
    backgroundColor: '#019AD4',
    borderRadius: 50,

  },

  text:{
    marginLeft: 10,
    fontSize:17,
  }
})