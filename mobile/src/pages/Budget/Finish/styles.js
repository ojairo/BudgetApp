import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  containerFinish:{
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#019ad4',
    justifyContent: 'center',
  },

  contentHeader:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title:{
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },

  description:{
    width: 300,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    color: '#FEE'
  },

  contentButton: {
    alignItems: 'center',
    marginBottom: 35,
  },

  button: {
    padding: 20,
    backgroundColor: '#0679A4',
    borderRadius: 50,
  }
})