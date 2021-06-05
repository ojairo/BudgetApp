import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#019ad4',
  },

  description:{
    width: 280,
    lineHeight: 19,
    marginTop: 14,
  },

  containerButton:{
    marginTop: 35,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonAdd:{
    padding: 20,
    alignItems:'center',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#019ad4',

    marginLeft: 20,
  },

  buttonSearch:{
    padding: 20,
    alignItems:'center',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'red',

    marginRight: 20,
  },

  
})