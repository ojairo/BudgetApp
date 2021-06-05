import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  containerServiceProfile:{
    flex: 1,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  content:{
    flex: 1,
    marginTop: 15,
    paddingHorizontal:24,
    paddingVertical:24,

    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    borderWidth: 4,
    borderBottomWidth: 0,
    borderColor: 'rgba(100,100,100,0.1)',

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },  

  containerService:{
    flex: 1,
    width: 280,
    alignItems: 'center',
  },  

  iconSup:{
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textUser:{
    backgroundColor: '#FFF',
    alignItems: 'center',
  },

  userName:{
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  userCity:{
    fontSize: 12,
    fontWeight: 'bold',
    color: '#019ad4',
    textTransform: 'uppercase',

  },

  serviceId:{
    fontSize: 10,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#019ad4'
  },

  details:{
    width: 200,
    marginTop: 20,
    alignItems: 'center',
  },

  textDetails:{
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },

  grid:{
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    borderBottomWidth: 3,
    borderBottomColor: '#019ad4',

  },

  boxMoney:{
    width: '50%',
    paddingTop: 2,

    borderRightWidth: 1.5,
    borderColor: '#019ad4',

    alignItems:'center',
    justifyContent: 'center',
  },

  boxMetros:{
    width: '50%',
    paddingTop: 2,

    borderLeftWidth: 1.5,
    borderColor: '#019ad4',

    alignItems:'center',
    justifyContent: 'center',
  },

  
  textMedium:{
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },

  textDate:{
    color: '#000',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,

  },

  changeDate:{
    marginBottom: 15,
    textDecorationLine: 'underline',
    color: 'blue',
  }


  
})