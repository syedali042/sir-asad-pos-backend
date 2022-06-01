const req = require('express/lib/request');
const res = require('express/lib/response');
const VendorModel =  require('../models').VendorModel;

module.exports = {
    vendorRegister : async(req,res) => {
        try{
            const checkVendor = await  VendorModel.findOne({email: req.body.email});
            console.log(checkVendor)
            if(!checkVendor){
                const createVendor = await VendorModel.create({...req.body});
                if(createVendor) res.status(200).send({msg : 'Vendor regestered', data: createVendor});
                else req.status(203).send({msg: 'something went worng'});

            }else{
                res.status(203).send({msg : 'Vendor Already registered'});
            }
        }catch(error){
            console.log(error);
            res.status(500).send({msg : 'Internal server error'});
        }
    },
    loginVendor : async(req,res) => {
         try{
            const findVendor = await VendorModel.findOne({email: req.body.email, password: req.body.password})
            if (findVendor){
                res.status(200).send({msg : 'Vendor Authenticated Successful', data:findVendor});
            }else{
                res.status(203).send({msg : 'NO Vendor Exist'});
            }
         }catch(error){
           res.status(500).send({msg : 'Internal Server Error'});
         }
    },
    update : async(req,res) =>{
          try{
              const data = req.body;
              var items = {}
              const condition = { 
                  _id: req.body.userId
              };
              const updateVendor =  await UserModel.findOneAndUpdate(condition, req.body, {upsert:true, new:true});
              if(updateUser){
                  res.status(200).send({msg : ' user Update Successful', data : updateUser});
              }else{
                  req.status(203).send({msg : ' No user Exist'})
              }
          }catch(error){
              req.status(500).send({ msg : 'Internal Server Error '});
          }
    },
    profilePicture : async (req,res)=> {
           try {
               const  files = req.file;
               return res.status(200).send({msg : ' Uploaded' , data: files.filename});
           } catch (error) {
               return req.status(500).send(error.message);
           }
    }
}