const express = require('express')
const pool = require('./utils/db')
const cors = require('cors')
const PORT = 8000

const app = express()
app.use(express.json())
app.use(cors())

app.post('/add', async (req, res) => {
    try {
        const { title, content } = req.body;

        const addQuery = `INSERT INTO notes VALUES (?, ?)`;

        pool.query(addQuery, [title, content], (err, result) => {
            if (err) {
                console.log(err, 'inside pool')
            }
            return res.status(200).json({ result })
        })

    } catch (e) {
        console.log(e, 'inside catch');
    }
})

app.post('/delete', async (req, res) => {
    try {
        const { content } = req.body;

        const deleteQuery = `DELETE FROM notes WHERE content = ?`

        pool.query(deleteQuery, [content], (err, result) => {
            if (err) {
                console.log(err, 'inside pool')
            }
            return res.status(200).json({ result })
        })

    } catch (e) {
        console.log(e, 'inside catch');
    }
})

app.get('/show', async (req, res) => {
    try {
        const showQuery = `SELECT * FROM notes`

        pool.query(showQuery, (err, result) => {
            if (err) {
                console.log(err, 'inside pool')
            }
            return res.status(200).json({ result })
        })
    } catch (e) {
        console.log(e, 'inside catch')
    }
})

app.listen(PORT, (req, res) => {
    console.log('Server connected on port', PORT)
})