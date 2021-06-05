const connection = require("../database/connection")

module.exports = {
  async index(req, res){
    const {id} = req.params
    const serviceUnique = await connection('services')
    .where('services.id', '=', id)
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
      'budget.footage'
    ])

    return res.json(serviceUnique)
  }
}