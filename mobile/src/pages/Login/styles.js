import {StyleSheet} from 'react-native'


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#019AD4',
    paddingHorizontal: 24,
    alignItems: 'center',
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

  buttons:{
    width: 280,
    flexDirection: 'row', 
    justifyContent: 'flex-end'

  },

  buttonIn:{
    borderRadius: 50,
    alignItems: 'center',
    width: 100,
    padding: 20,
    backgroundColor: '#0679A4',
    marginTop: 18,
    marginLeft: 15,
  },

})