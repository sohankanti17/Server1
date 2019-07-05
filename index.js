const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('', (req, res) => {
	res.json({
		message : "Successfull connection to the server"
	})
})

app.get('/aanchal', (req, res) => {
	res.json({
		message : "Successfull connection to the endpoint /aanchal",
		user: "Aanchal",
	})
})

app.get('/sohan', (req, res) => {
	res.json({
		message : "Successfull connection to the endpoint /sohan",
		user: "Sohan Kanti"
	})
})

app.get('*', (req, res) => {
	res.json({
		message : "Invalid endpoint!"
	})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})