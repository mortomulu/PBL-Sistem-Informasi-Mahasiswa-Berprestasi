const connection = require('../database').dbConnection
module.exports = {
    getPrestasi: (req, res) => {
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
    },

    createData: (req, res) => {
        let namaPrestasi = req.body.namaPrestasi
        let jenisPrestasi = req.body.jenisPrestasi
        let thnPrestasi = req.body.thnPrestasi
        let mahasiswa = req.body.mahasiswa
        var imgsrc = req.file.filename
        const query = `INSERT INTO prestasi (
        id_prestasi, nama_prestasi, jenis_prestasi, thn_prestasi, dokumen, mahasiswa
    ) VALUES (
        "",
        "${namaPrestasi}",
        "${jenisPrestasi}",
        "${thnPrestasi}",
        "${imgsrc}",
        "${mahasiswa}"
    )`
        connection.query(query, (err, result) => {
            if (err) {
                return res.json({
                    error: err
                })
            } else {
                return res.redirect('/prestasi')
            }
        })
    }
}