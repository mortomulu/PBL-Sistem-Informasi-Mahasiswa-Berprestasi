const connection = require('../database').dbConnection

module.exports = {
    getDosen: (req, res) => {
        connection.query('SELECT * FROM dosen', (err, rows) => {
            if (err) {
                return res.json({
                    error: err
                })
            } else {
                return res.json({
                    data: rows
                })
            }
        })
    }
}