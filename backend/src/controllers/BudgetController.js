const connection = require('../database/connection')
const crypt = require('crypto')

module.exports = {
  async index(req, res){
    const budget = await connection('budget').select('*')
    return res.json(budget)
   
  },

  async create(req, res){
    const {name, address, city, uf, phone, typeService, footage, value, date} = req.body

    const idHashed = crypt.randomBytes(6).toString('hex')

    const [id] = await connection('budget').insert({
      id: idHashed,
      name,
      address,
      city,
      uf,
      phone,
      typeService,
      footage,
      value,
      date,
    })

    if(id){
      return res.json(idHashed)
    }
      
    return res.status(400),send({message: 'Erro ao cadastrar cliente.'})
  },

  async delete(req, res){
    const {id} = req.params

    try {
      const response = await connection('budget').where('id', '=', id).delete()

      if(response){
        const respService = await connection('services')
        .where('idBudget', '=', id)
        .delete()

        if(respService){
          return res.status(204).json({message: 'Budget and service deleted with success.'})
        }
        return res.status(204).json({message: 'Budget deleted with success.'}) 
      }
      

    } catch (error) {
      return res.status(400).json({message: 'erro ao deletar usuário.'})
    }

  }
}