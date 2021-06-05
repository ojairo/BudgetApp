const connection = require('../database/connection')

module.exports= {

  async update(req, res){
    const {id} = req.params
    const {typeService, footage, value, date} = req.body

    const response = await connection('budget')
    .where('id', '=', id)
    .update({
      typeService,
      footage,
      value,
      date,
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