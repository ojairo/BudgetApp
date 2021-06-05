import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  containerDashboard:{
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
    marginTop:50,
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

  functions:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  budgets:{
    width: 280,
    flexDirection: 'row',
    alignItems: 'center'
  },

  budgetIcon:{
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#019AD4',

    paddingVertical: 35,
    paddingHorizontal: 40,

    borderWidth: 5,
    borderRadius: 40,
    borderColor: '#019AD4'
  },

  budgetText:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#019AD4',
    marginLeft: 16,

  },

  services:{
    width: 280,
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 30,
  },

  serviceIcon:{
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#019AD4',

    paddingVertical: 35,
    paddingHorizontal: 40,

    borderWidth: 5,
    borderRadius: 40,
    borderColor: '#019AD4'
  },

  serviceText:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#019AD4',
    marginLeft: 16,

  },
})