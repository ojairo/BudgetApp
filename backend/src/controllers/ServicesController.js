const connection = require("../database/connection")
const crypt = require('crypto')

module.exports = {
  async index(req, res){
    const services = await connection('services')
      .join('budget', 'budget.id', '=', 'services.idBudget')
      .select([
        'services.*',
        'budget.name',
        'budget.address',
        'budget.uf',
        'budget.city',
        'budget.phone',
        'budget.typeService',
        'budget.value',
        'budget.footage',
      ])

    if(!services){
      return res.status(400).json({error: 'Can not find this service.'})
    }
    return res.json(services)

    
    
  },

  async create(req, res){
    const {date, helper} = req.body
    const idBudget = req.params.id

    const idHashed = crypt.randomBytes(6).toString('hex')

    const service = await connection('budget')
    .where('id', idBudget)
    .select('id')
    .first();

    if(!service){
      return res.status(404).json({error: 'No budget found.'})
    }

    const [id] = await connection('services').insert({
      id: idHashed, 
      date,
      helper,
      idBudget
    })
    
    return res.json({id})
  },

  async update(req, res){
    const {id} = req.params
    const {helper, date} = req.body

    const response = await connection('services')
    .where('id', '=', id)
    .update({
      date,
      helper,
    })

    if(response){
      return res.status(200).send({return: 'Data service has be updated.'})
    }

    return res.status(400).send({message: 'Data user is not updated.'})
  },

  async delete(req, res){
    const {id} = req.params

    const response = await connection('services')
    .where('id', '=', id)
    .delete()

    if(!response){
      return res.status(401).send({message: 'Service is not deleted.'})
    }

    return res.status(204).send({message: 'Service deleted with success.'})
   
  }
}