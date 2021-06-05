const connection = require('../database/connection')

module.exports= {

  async index(req, res){
    const {id} = req.params
    const budgetUser = await connection('budget')
    .where('id', '=', id)
    .select('*')

    if(!budgetUser){
      return res.status(400).send({message: 'Can not find any user with this ID.'}) 
    }

    return res.json(budgetUser)
  },

  async update(req, res){
    const {id} = req.params
    const {name, address, city, number, phone} = req.body

    const response = await connection('budget')
    .where('id', '=', id)
    .update({
      name,
      address,
      city,
      number,
      phone,
    })

    if(response){
      const responseIndex = await connection('budget')
      .where('id', '=', id)
      .select('*')
      return res.json(responseIndex)
    }

    return res.status(400).send({message: 'Data user is not updated.'})
  },
}