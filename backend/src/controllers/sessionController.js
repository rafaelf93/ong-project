const conection = require('../database/conection');

module.exports = {
    async create(request,response){

        const {id} = request.body;

        const ong = await conection('ongs')
        .where('id',id)
        .select('name')
        .first();

    if (!ong) {
        return response.status(400).json({error: "está ong não existe"});
    }

    return response.json(ong);
    }


};