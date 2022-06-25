//Models
const {registration: Registration} = require('../models/registration.model')


const getAllRegistrations = async(req, res, next) => {
  try{
    const registrations = await Registration.findAll();

    res.status(200).json({registrations});
  }
  catch(err) {}
};

const getRegistrationsById = async(req, res, next) => {
  try{
    const {id} = req.params;  
    const registration = await Registration.findOne({where:{id}});

    if(!registration){
      return res.status(404).json({
        status:'Error',
        message:'Registration not found',
      })
    }

    res.status(200).json({registration});
  }
  catch(err) {}
};

const checkin = async(req, res, next) => {
  try{

  }
  catch(err) {}
};

const checkout = async(req, res, next) => {
  try{
    
  }
  catch(err) {}
};

const cancelRegistration = async(req, res, next) => {
  try{}
  catch(err) {}
};

module.exports={
  getAllRegistrations,
  getRegistrationsById,
  checkin,
  checkout,
  cancelRegistration
}