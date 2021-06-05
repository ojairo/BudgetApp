import api from '../services/api'

export async function authUser(user, pass){
  const responseData = await api.post('/session', {user, pass})
  
  return responseData
}
