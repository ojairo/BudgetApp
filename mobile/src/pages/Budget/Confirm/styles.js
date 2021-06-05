import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  containerConfirm: {
    flex: 1,
    paddingHorizontal: 24,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingTop: Constants.statusBarHeight + 20,
  },

  content:{
    flex: 1,
    marginVertical: 15,
  },  

  containerScroll:{
    paddingVertical: 10,
  },

  contentData:{
    paddingHorizontal: 24,
    paddingVertical: 12,

    backgroundColor: '#019ad4',
    borderRadius: 8,
    marginTop: 10,
  },

  userContent:{
    alignItems: 'center',
  },

  userHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  dateText:{
    fontSize: 16,
    fontWeight: 'bold',
    color : '#FFF'
  },

  featherUser:{
    marginTop: -15,
  },

  text:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },

  description:{
    color: '#FFF',
    fontSize: 14,
    width: '90%',
    textAlign: 'center',
    marginTop: 5,
  },

  dataHeader:{
    flexDirection: 'row',
    alignItems:'center',
    marginBottom: 10,
  },

  title:{
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#0679A4',
    marginLeft: 10,
  },

  row:{
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center'
  },

  descriptionValue:{
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',

    marginLeft: 15,
    textTransform: 'uppercase'
  },

  footageDescrip:{
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  type:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },

  containerButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,

  },
  
  
  contentButtonRight:{
    alignItems: 'center',
    flexDirection: 'row-reverse',
    marginTop: 20,
  },

  contentButtonLeft:{
    alignItems: 'center',
    flexDirection: 'row-reverse',
    marginTop: 20,
  },

  buttonFinish: {
    padding: 18,
    marginLeft: 10,
    backgroundColor: '#019ad4',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#019ad4',
  },

  buttonBack: {
    padding: 18,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#019ad4',
  },

  hour:{
    fontWeight: 'bold',
    marginTop: 5,
    color: '#FFF'
  },
})