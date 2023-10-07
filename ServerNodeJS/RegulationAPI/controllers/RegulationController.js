const { where } = require("sequelize")
const db= require("../models")
const regulations= db.regulations
class RegulationController{
    index= function(req, res){
        regulations.findAll({raw: true})
        .then(data=> res.status(200).send(data))
        .catch(err=>{
            res.status(500).send({
                "err": err
            })
        })
    }
    create= function(req, res){
        const data= req.body
        //console.log(req)
        const regulation= new regulations(data)
        regulation.save()
        .then( row=>{
            res.status(200).send({row: row})
        })
        .catch(err=>{
            send({err: err})
        })
       
    }
    update = function (req, res) {
        const id = req.params.id;
        console.log("id: "+ id)
        const data = req.body;
        regulations.update(data,{
            where:{NUM_QD: id}
        })
        .then(row=>{
            res.send({"row update": row,
            id: id,
             data: data} )
        })
        .catch(err=>{
            res.status(500),send(err.message)
        })
        
    }
    
    delete= function(req, res){
        const id = req.params.id;
        regulations.destroy({
            where: { NUM_QD : id }
        })
        .then(row =>{
            res.send({"row update": row,
            id: id})
        })
        .catch(err=>{
            res.status(500),send(err.message)
        })
    }
}

module.exports = new RegulationController