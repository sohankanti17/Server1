const express = require('express')
const app = express()

app.use('/', (req, res) => {
	res.json({
		message : "Successfull connection to the server"
	})
})

app.use('/aanchal', (req, res) => {
	res.json({
		message : "Successfull connection to the endpoint /aanchal",
		user: "Aanchal",
	})
})

app.use('/sohan', (req, res) => {
	res.json({
		message : "Successfull connection to the endpoint /sohan",
		user: "Sohan Kanti"
	})
})

app.use('*', (req, res) => {
	res.json({
		message : "Invalid endpoint!"
	})
})

app.listen(80, () => {
    console.log(`Server running on port 80`)
})