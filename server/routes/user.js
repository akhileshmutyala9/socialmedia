
const express = require("express");
const User = require('../models/user'); 
const router = express.Router();


router
                      .post('/login', async (request, responce) => {
                      try {
                             const user = await User.login(request.body.username, request.body.password);
                              responce.send({...user, password: undefined});
                           } 
                           
                           catch(err) {
                              responce.status(401).send({ message: err.message });
                                      }
                                      })

           .post('/register', async (requested, responce) => {
                   try {
                      const user = await User.register(request.body.username, request.body.password);
                      responce.send({...user, password: undefined});
                      } 
                      catch(err) {
                                  responce.status(401).send({ message: err.message }); 
                                 }
                         })

                            .put('/update', async (request, responce) => {
                              try {
                             const user = await User.updatePassword(request.body.id, request.body.password);
                             responce.send({...user, password: undefined});
                                 } 
                                 catch(err) {
                                    responce.status(401).send({ message: err.message });
                                              }
                                    })

               .delete('/delete', async (request, responce) => {
              try {
                    await User.deleteUser(requeste.body.id);
                    responce.send({ success: "account is deleted succesfully" });
                  } catch(err)
                   {
                       responce.status(401).send({ message: err.message });
                   }
                   })

// 3. export router for use in index.js
module.exports = router;

