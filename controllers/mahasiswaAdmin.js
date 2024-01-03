const connection = require('../database').dbConnection

module.exports = {
    getMahasiswa: (req, res) => {
        connection.query('SELECT P.*, M.* FROM prestasi P INNER JOIN mahasiswa M ON P.mahasiswa = M.nim', (err, rows) => {
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