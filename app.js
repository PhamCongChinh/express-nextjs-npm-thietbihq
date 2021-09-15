const express = require('express') //Sử dụng framework Express
const next = require('next') //Thêm module Nextjs

const port = parseInt(process.env.PORT, 10) || 3000 //Cong chay 
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	//const showRoutes = require("./routes/index.js");
	//server.use("/api/v1", showRoutes(server));

	server.all('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})
