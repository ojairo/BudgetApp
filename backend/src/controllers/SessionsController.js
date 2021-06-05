const connection = require('../database/connection') 
const bcrypt = require('bcryptjs')

module.exports = {
  async create(req, res){
    const {user, pass} = req.body

    const [checkUser] = await connection('profile')
    .where('user', user)
    .select('*')

    if(!checkUser){
      return res.status(404)
      .send({message: 'Incorrect user/password combination.'})
    }

    const passMatched = await bcrypt.compare(pass, checkUser.pass)

    if(!passMatched){
      return res.status(404)
      .send({message: 'Incorrect user/password combination.'})
    }

    return res.status(200).json({checkUser})
  }

}