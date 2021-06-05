const connection = require('../database/connection') 
const crypt = require('crypto')
const bcrypt = require('bcryptjs')

module.exports = {
  async index(req, res){
    const {user} = req.params
    const profileJoin = await connection('profile')
    .where('user', '=', user)
    .select('*')
    return res.json(profileJoin)
  },

  async create(req, res){
    const {name, user, pass, email, phone, address} = req.body
    const idHashed = crypt.randomBytes(6).toString('hex')
    const passHashed = await bcrypt.hash(pass, 8)
    
    const [id] = await connection('profile').insert({
      id: idHashed,
      name,
      user,
      pass: passHashed,
      phone,
      email,
      address,
    })

    return res.json({id})
  },

  async delete(req, res){
    const {id} = req.params

    await connection('profile').where('id',id).delete()
    return res.status(200).send()

    
  }

}