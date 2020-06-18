const pool = require("../../config/database");

module.exports = {

    getUsers: callBack => {
        pool.query(
            `select emp_id, emp_name, emp_email, emp_photo, emp_address, emp_password, branch_name, bank_name
                from employee, bank_branch, bank 
                where employee.branch_id = bank_branch.branch_id and bank_branch.bank_id=bank.bank_id`,
            [],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
        
    getUserByUserId: (id, callBack) => {
        pool.query(
            `select emp_id, emp_name, emp_email, emp_photo, emp_address, emp_password, branch_id from employee where emp_id = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * from employee where emp_email = ?`,
            [email],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};