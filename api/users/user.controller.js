const { 
    getUsers, 
    getUserByUserId,
    getUserByUserEmail
 } = require("./user.service");

 const { sign } = require("jsonwebtoken");

module.exports = {
    
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "record not Found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.emp_email, (err, results) => {
            if(err) {
                console.log(err);
            }
            if(!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
            //const result = body.password.compair(results.emp_password);
            if(body.emp_password == results.emp_password){
                results.emp_password = undefined;
                const jsontoken = sign({ result: results }, process.env.SALT, {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken
                });
            }
            else{
                return res.json({
                    success: 0,
                    message: "Invalid email or password"
                });
            }
        });
    }

};