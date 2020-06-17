const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registration(emp_name, emp_email, emp_photo, emp_address, emp_assword)
                        values(?, ?, ?, ?, ?)`,
            [
                data.emp_name,
                data.emp_email,
                data.emp_photo,
                data.emp_address,
                data.emp_password,
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    }
}