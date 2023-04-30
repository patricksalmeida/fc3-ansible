const express = require('express')

const app = express()
const port = 3002

app.get('/', (req, res) => res.send('Hello Ansible'))

app.listen(port, () =>  console.log('Express running on port 3002'))